/*
  ╔══════════════════════════════════════════════════════════════╗
  ║              SMART SPRAY CAR  –  robot_car.ino               ║
  ║  Manual mode  : Bluetooth controls F/B/L/R/S/P               ║
  ║  Auto mode    : Wall-following zigzag with 3× HC-SR04        ║
  ╚══════════════════════════════════════════════════════════════╝

  ── BLUETOOTH COMMANDS ─────────────────────────────────────────
    F  = forward        (manual only)
    B  = backward       (manual only)
    L  = turn left      (manual only)
    R  = turn right     (manual only)
    S  = stop           (manual only)
    P  = pump 3 sec     (manual only)
    A  = start AUTO zigzag
    M  = stop  AUTO, back to manual

  ── HOW AUTO ZIGZAG WORKS ─────────────────────────────────────

   TOP VIEW of field:

   ┌──────────────────────────────────────┐  ← far wall
   │                                      │
   │  ←←←←←←←←←←←←←←←←←←←←←←←←←←←  │  row 2 (LEFT wall mode)
   │  ↓                              ↑   │
   │  →→→→→→→→→→→→→→→→→→→→→→→→→→→→  │  row 1 (RIGHT wall mode)
   │                                      │
   └──────────────────────────────────────┘
   LEFT wall                        RIGHT wall

   RIGHT WALL MODE  (going →, right sensor watches right wall):
     right > 37 cm  →  drifting away from wall  →  steer RIGHT
     right < 24 cm  →  too close to wall        →  steer LEFT
     front < 30 cm  →  wall ahead               →  turn LEFT 180°
                        switch to LEFT WALL MODE

   LEFT WALL MODE   (going ←, left sensor watches left wall):
     left  > 67 cm  →  drifting away from wall  →  steer LEFT
     left  < 53 cm  →  too close to wall        →  steer RIGHT
     front < 30 cm  →  wall ahead               →  turn RIGHT 180°
                        switch to RIGHT WALL MODE

   DONE:
     In RIGHT WALL MODE, right sensor suddenly reads > 90 cm
     = right wall disappeared = open end of field = finished
     (The car has crossed the whole field)
*/

// ──────────────────────────────────────────────────────────────
//  L298N #1 – DRIVE MOTORS  (your original pins, unchanged)
// ──────────────────────────────────────────────────────────────
int IN1 = 8;   // left  motor A
int IN2 = 9;   // left  motor B
int IN3 = 10;  // right motor A
int IN4 = 11;  // right motor B
int ENA = 5;   // left  motor PWM speed
int ENB = 6;   // right motor PWM speed

// ──────────────────────────────────────────────────────────────
//  L298N #2 – WATER PUMP  (your original pins, unchanged)
// ──────────────────────────────────────────────────────────────
int P_IN1 = 7;
int P_IN2 = 12;
int P_EN  = 2;

// ──────────────────────────────────────────────────────────────
//  HC-SR04 – ULTRASONIC SENSORS  (NEW – uses A0 to A5)
//  Analog pins used as digital I/O so no conflict with your pins
// ──────────────────────────────────────────────────────────────
#define TRIG_F  A0    // Front sensor Trigger
#define ECHO_F  A1    // Front sensor Echo
#define TRIG_R  A2    // Right sensor Trigger
#define ECHO_R  A3    // Right sensor Echo
#define TRIG_L  A4    // Left  sensor Trigger
#define ECHO_L  A5    // Left  sensor Echo

// ──────────────────────────────────────────────────────────────
//  SENSOR THRESHOLDS  (cm) – tune to your field
// ──────────────────────────────────────────────────────────────

// Right-wall following (RIGHT WALL MODE)
#define R_TARGET   30   // ideal distance to right wall
#define R_TOO_FAR  37   // > this → steer right (moving away)
#define R_TOO_NEAR 24   // < this → steer left  (too close)
#define R_DONE     90   // > this → right wall gone = field done

// Left-wall following (LEFT WALL MODE)
#define L_TARGET   60   // ideal distance to left wall
#define L_TOO_FAR  67   // > this → steer left  (moving away)
#define L_TOO_NEAR 53   // < this → steer right (too close)

// Front obstacle (both modes)
#define F_LIMIT    30   // < this → wall ahead, turn 180°

// ──────────────────────────────────────────────────────────────
//  MOTOR SPEEDS  (0-255 PWM)
// ──────────────────────────────────────────────────────────────
#define SPEED_FULL   200   // straight forward/backward
#define SPEED_FAST   200   // faster side when steering
#define SPEED_SLOW   120   // slower side when steering (gentle curve)
#define SPEED_TURN   180   // both motors during 180° spin

// ──────────────────────────────────────────────────────────────
//  TURN 180° TIMING  ← !! MUST TUNE THIS ON YOUR REAL CAR !!
//  Test: call turn180Left() once, measure angle, adjust ms.
// ──────────────────────────────────────────────────────────────
#define TURN_180_MS  800   // milliseconds for a full 180° spin

// ──────────────────────────────────────────────────────────────
//  AUTO MODE STATE
// ──────────────────────────────────────────────────────────────
bool autoMode = false;

// true  = following RIGHT wall (going →)
// false = following LEFT  wall (going ←)
bool rightWallMode = true;

char command;

// ══════════════════════════════════════════════════════════════
//  SETUP
// ══════════════════════════════════════════════════════════════
void setup() {
  Serial.begin(9600);

  // Motor pins
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT); pinMode(ENB, OUTPUT);

  // Pump pins
  pinMode(P_IN1, OUTPUT);
  pinMode(P_IN2, OUTPUT);
  pinMode(P_EN,  OUTPUT);

  // Ultrasonic pins
  pinMode(TRIG_F, OUTPUT); pinMode(ECHO_F, INPUT);
  pinMode(TRIG_R, OUTPUT); pinMode(ECHO_R, INPUT);
  pinMode(TRIG_L, OUTPUT); pinMode(ECHO_L, INPUT);

  stopMotor();
}

// ══════════════════════════════════════════════════════════════
//  MAIN LOOP
// ══════════════════════════════════════════════════════════════
void loop() {

  // Always listen for Bluetooth
  if (Serial.available()) {
    command = Serial.read();

    if (command == 'A') {
      autoMode      = true;
      rightWallMode = true;   // always start in right-wall mode
      pumpOn();
    }
    else if (command == 'M') {
      autoMode = false;
      stopMotor();
      pumpOff();
    }

    // Manual controls only work when NOT in auto mode
    if (!autoMode) {
      if      (command == 'F') forward();
      else if (command == 'B') backward();
      else if (command == 'L') left();
      else if (command == 'R') right();
      else if (command == 'S') stopMotor();
      else if (command == 'P') pumpOnce();
    }
  }

  if (autoMode) {
    autoZigzag();
  }
}

// ══════════════════════════════════════════════════════════════
//  AUTO ZIGZAG – main logic
// ══════════════════════════════════════════════════════════════
void autoZigzag() {
  long dF = getDistance(TRIG_F, ECHO_F);
  long dR = getDistance(TRIG_R, ECHO_R);
  long dL = getDistance(TRIG_L, ECHO_L);

  // ── RIGHT WALL MODE (going →, watching right wall) ──────────
  if (rightWallMode) {

    // DONE: right wall disappeared → field is finished
    if (dR > 0 && dR > R_DONE) {
      stopMotor();
      pumpOff();
      autoMode = false;
      Serial.println("DONE");   // App Inventor reads this
      return;
    }

    // FRONT wall → turn LEFT 180°, switch to left-wall mode
    if (dF > 0 && dF < F_LIMIT) {
      stopMotor();
      delay(150);
      turn180Left();            // spins left 180°
      rightWallMode = false;    // next row follows left wall
      return;
    }

    // Right wall too far → steer right (curve toward wall)
    if (dR > 0 && dR > R_TOO_FAR) {
      steerRight();
      return;
    }

    // Right wall too near → steer left (curve away from wall)
    if (dR > 0 && dR < R_TOO_NEAR) {
      steerLeft();
      return;
    }

    // Distance is good (24–37 cm) → go straight
    forward();
  }

  // ── LEFT WALL MODE (going ←, watching left wall) ────────────
  else {

    // FRONT wall → turn RIGHT 180°, switch back to right-wall mode
    if (dF > 0 && dF < F_LIMIT) {
      stopMotor();
      delay(150);
      turn180Right();           // spins right 180°
      rightWallMode = true;     // next row follows right wall
      return;
    }

    // Left wall too far → steer left (curve toward wall)
    if (dL > 0 && dL > L_TOO_FAR) {
      steerLeft();
      return;
    }

    // Left wall too near → steer right (curve away from wall)
    if (dL > 0 && dL < L_TOO_NEAR) {
      steerRight();
      return;
    }

    // Distance is good (53–67 cm) → go straight
    forward();
  }
}

// ══════════════════════════════════════════════════════════════
//  ULTRASONIC – measure distance in cm
//
//  How it works:
//    1. Send a 10µs HIGH pulse on TRIG
//    2. Sensor fires 8 ultrasound bursts at 40 kHz
//    3. ECHO pin goes HIGH for as long as the sound takes
//       to travel to the object and back
//    4. distance = duration / 58
//       (sound = 0.0343 cm/µs, round trip ÷2 → ÷58)
//
//  Example: object at 30 cm
//    30 cm × 2 = 60 cm round trip
//    60 / 0.0343 = 1749 µs
//    1749 / 58 ≈ 30 cm  ✓
//
//  Returns 0 if no echo (out of range or wiring error)
// ══════════════════════════════════════════════════════════════
long getDistance(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long duration = pulseIn(echoPin, HIGH, 25000); // 25ms timeout
  if (duration == 0) return 0;
  return duration / 58;
}

// ══════════════════════════════════════════════════════════════
//  MOTOR FUNCTIONS
// ══════════════════════════════════════════════════════════════

// ── Go straight forward ──────────────────────────────────────
void forward() {
  analogWrite(ENA, SPEED_FULL);
  analogWrite(ENB, SPEED_FULL);
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);   // left  forward
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);   // right forward
}

// ── Go straight backward ─────────────────────────────────────
void backward() {
  analogWrite(ENA, SPEED_FULL);
  analogWrite(ENB, SPEED_FULL);
  digitalWrite(IN1, LOW); digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW); digitalWrite(IN4, HIGH);
}

// ── Gentle curve RIGHT  ──────────────────────────────────────
//  Left motor faster, right motor slower → curves right
//  Used in auto mode to correct toward right wall
void steerRight() {
  analogWrite(ENA, SPEED_FAST);   // left  motor – fast
  analogWrite(ENB, SPEED_SLOW);   // right motor – slow
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);
}

// ── Gentle curve LEFT ────────────────────────────────────────
//  Right motor faster, left motor slower → curves left
void steerLeft() {
  analogWrite(ENA, SPEED_SLOW);   // left  motor – slow
  analogWrite(ENB, SPEED_FAST);   // right motor – fast
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);
}

// ── Manual point-turn left (your original) ──────────────────
void left() {
  analogWrite(ENA, SPEED_FULL);
  analogWrite(ENB, SPEED_FULL);
  digitalWrite(IN1, LOW);  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);
}

// ── Manual point-turn right (your original) ─────────────────
void right() {
  analogWrite(ENA, SPEED_FULL);
  analogWrite(ENB, SPEED_FULL);
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);  digitalWrite(IN4, LOW);
}

// ── Stop all motors ──────────────────────────────────────────
void stopMotor() {
  digitalWrite(IN1, LOW); digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW); digitalWrite(IN4, LOW);
}

// ── 180° spin LEFT (used at end of right-wall row) ──────────
//  Left motor backward + right motor forward = spins left
void turn180Left() {
  analogWrite(ENA, SPEED_TURN);
  analogWrite(ENB, SPEED_TURN);
  digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH);  // left  backward
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);   // right forward
  delay(TURN_180_MS);
  stopMotor();
  delay(200);
}

// ── 180° spin RIGHT (used at end of left-wall row) ──────────
//  Left motor forward + right motor backward = spins right
void turn180Right() {
  analogWrite(ENA, SPEED_TURN);
  analogWrite(ENB, SPEED_TURN);
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);   // left  forward
  digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH);  // right backward
  delay(TURN_180_MS);
  stopMotor();
  delay(200);
}

// ══════════════════════════════════════════════════════════════
//  PUMP FUNCTIONS  (your original, unchanged)
// ══════════════════════════════════════════════════════════════
void pumpOn() {
  digitalWrite(P_EN,  HIGH);
  digitalWrite(P_IN1, HIGH);
  digitalWrite(P_IN2, LOW);
}

void pumpOff() {
  digitalWrite(P_EN,  LOW);
  digitalWrite(P_IN1, LOW);
  digitalWrite(P_IN2, LOW);
}

void pumpOnce() {
  pumpOn();
  delay(3000);
  pumpOff();
}
