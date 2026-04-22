char command;

// CAR (L298N #1)
int IN1 = 8;
int IN2 = 9;
int IN3 = 10;
int IN4 = 11;
int ENA = 5;
int ENB = 6;

// PUMP (L298N #2)
int P_IN1 = 7;
int P_IN2 = 12;
int P_EN  = 2;  // you wanted pin 2

void setup() {
  Serial.begin(9600);

  // car
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);

  // pump
  pinMode(P_IN1, OUTPUT);
  pinMode(P_IN2, OUTPUT);
  pinMode(P_EN, OUTPUT);

  analogWrite(ENA, 200);
  analogWrite(ENB, 200);
}

// ===== CAR =====
void forward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void backward() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
}

void left() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void right() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

void stopMotor() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

// ===== PUMP =====
void pumpOnce() {
  digitalWrite(P_EN, HIGH);   // ENABLE
  digitalWrite(P_IN1, HIGH);
  digitalWrite(P_IN2, LOW);

  delay(3000); // 3 sec

  digitalWrite(P_EN, LOW);    // DISABLE
  digitalWrite(P_IN1, LOW);
  digitalWrite(P_IN2, LOW);
}

void loop() {
  if (Serial.available()) {
    command = Serial.read();

    if (command == 'F') forward();
    else if (command == 'B') backward();
    else if (command == 'L') left();
    else if (command == 'R') right();
    else if (command == 'S') stopMotor();
    else if (command == 'P') pumpOnce();
  }
}
