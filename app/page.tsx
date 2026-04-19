"use client";

const cyan = "#00D4FF";
const green = "#00FF88";
const dark = "#111111";
const gray = "#f5f5f5";

const techItems = [
  {
    label: "L298N Motor Driver",
    isDark: false,
    img: "https://projects.arduinocontent.cc/cover-images/2d730ee3-ac86-43f0-856b-a11c51a82e91.png",
  },
  {
    label: "DC Water Pump",
    isDark: false,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sfXwQPODp35Mrnv1H1aDE5CG6i25Ul56dg&s",
  },
  {
    label: "DC Motor",
    isDark: false,
    img: "https://m.media-amazon.com/images/I/61H+0kIGnZL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    label: "HC-05 Bluetooth",
    isDark: false,
    img: "https://roboman.in/wp-content/uploads/2024/10/283.webp",
  },
  {
    label: "HC-SR04 Ultrasonic",
    isDark: false,
    img: "https://robomart.com/wp-content/uploads/2024/12/RM000788.jpg",
  },
  {
    label: "Arduino UNO",
    isDark: false,
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg",
  },
];

const team = [
  { name: "B.Erkhes", role: "Code, Website & Design", active: true },
  { name: "U.Nyambayar", role: "Design, Code & Documents", active: false },
  { name: "A.Molor", role: "Code, Design & Website", active: false },
];

export default function CleroLanding() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        color: dark,
        overflowX: "hidden",
      }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Only keyframe animations need a style tag — can't be inlined */}
      <style>{`
        @keyframes floatRobot {
          0%,100% { transform: translateY(0px) rotate(-2deg); }
          50%      { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 48px",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: cyan,
            letterSpacing: "-0.02em",
          }}
        >
          CLERO
        </span>

        <ul
          style={{
            display: "flex",
            gap: 40,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["About", "Team", "Tech"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: dark,
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          style={{
            background: cyan,
            color: dark,
            padding: "12px 28px",
            borderRadius: 50,
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
        >
          Get Started
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 48px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* glow blob */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "55%",
            height: "100%",
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.15) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            gap: 40,
          }}
        >
          {/* Robot */}
          <div
            style={{
              flex: "0 0 45%",
              animation: "floatRobot 4s ease-in-out infinite",
            }}
          >
            <img
              src="https://zoxowmwtwran1uwo.public.blob.vercel-storage.com/pudu-cc1-grey-green-1_1200x1200-removebg-preview.png"
              alt="CLERO Robot"
              style={{ width: "100%", maxWidth: 480, objectFit: "contain" }}
            />
          </div>

          {/* Copy */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.2rem", color: "#444", marginBottom: 8 }}>
              Dont waste time
            </p>
            <h1
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              BY CLEANING
            </h1>
            <div
              style={{
                height: 3,
                background: dark,
                margin: "20px 0",
                borderRadius: 2,
                animation: "expandLine 1s ease forwards",
                transformOrigin: "left",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 36,
                fontSize: "1.4rem",
              }}
            >
              <span>Indoor cleaning robot</span>
              <span
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: green,
                }}
              >
                Strong
              </span>
            </div>
            <a
              href="#contact"
              style={{
                background: cyan,
                color: dark,
                padding: "12px 28px",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{
          padding: "100px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "1.5px solid rgba(0,0,0,0.07)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(2.2rem,5vw,3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 20,
          }}
        >
          What is CLERO?
        </h2>
        <p
          style={{
            maxWidth: 560,
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "#444",
            marginBottom: 48,
          }}
        >
          Clero is a smart cleaning robot that can operate automatically and be
          controlled remotely via phone, using motors and a water pump to
          perform thorough indoor cleaning.
        </p>

        {/* dirt-vs-clean strip */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: 800,
            borderRadius: 24,
            overflow: "hidden",
            height: 220,
            background: gray,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              width: "48%",
              height: "100%",
              background: "#f0f0f0",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              width: "55%",
              height: "100%",
              background: "linear-gradient(90deg,transparent,#c8a882)",
            }}
          />
          <img
            src="https://zoxowmwtwran1uwo.public.blob.vercel-storage.com/pudu-mt1-vac-top-view_2400x2400-removebg-preview.png"
            alt="CLERO top view"
            style={{
              height: 180,
              objectFit: "contain",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
            }}
          />
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ padding: "100px 48px", background: "#fff" }}>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(2.2rem,5vw,3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 48,
            textAlign: "center",
          }}
        >
          Meet the team
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 32,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {team.map((m) => (
            <div
              key={m.name}
              style={{
                background: m.active ? dark : gray,
                color: m.active ? "#fff" : dark,
                borderRadius: 20,
                padding: "32px 24px 28px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  background: m.active ? "#2a2a2a" : "#e0e0e0",
                  borderRadius: 16,
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                👤
              </div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                }}
              >
                {m.name}
              </div>
              <div
                style={{
                  height: 2,
                  background: m.active ? cyan : dark,
                  margin: "10px 0",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  fontSize: "0.9rem",
                  color: m.active ? "#aaa" : "#666",
                  lineHeight: 1.5,
                }}
              >
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH ── */}
      <section id="tech" style={{ padding: "100px 48px", background: gray }}>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(2.2rem,5vw,3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 48,
            textAlign: "center",
          }}
        >
          Our Technology
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            justifyContent: "center",
            maxWidth: "100vw",
            margin: "100px",
          }}
        >
          {/* Header card */}

          {techItems.map((item) => (
            <div
              key={item.label}
              style={{
                background: item.isDark ? dark : "#fff",
                color: item.isDark ? "#fff" : dark,
                borderRadius: 20,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative",
                overflow: "hidden",
                height: "300px",
                width: "300px",
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-55%)",
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER / CONTACT ── */}
      <footer
        id="contact"
        style={{
          background: "#1e1e1e",
          color: "#fff",
          padding: "80px 48px",
          display: "flex",
          gap: 80,
          alignItems: "flex-start",
        }}
      >
        <div style={{ minWidth: 180 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${cyan}`,
              borderRadius: 12,
              padding: "10px 20px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: cyan,
              }}
            >
              Clero
            </span>
          </div>
          <p style={{ fontSize: "0.9rem", color: "#888" }}>
            Indoor Cleaning Robot
          </p>
        </div>

        <div style={{ flex: 1, maxWidth: 500 }}>
          <p
            style={{
              color: cyan,
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Contact Us
          </p>

          {[
            { label: "Contact Name:", type: "text", placeholder: "Your name" },
            { label: "Mail:", type: "email", placeholder: "your@email.com" },
          ].map((f) => (
            <div key={f.label} style={{ marginBottom: 20 }}>
              <label
                style={{
                  fontSize: "0.9rem",
                  color: "#bbb",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                style={{
                  width: "100%",
                  background: "#2c2c2c",
                  border: "1px solid #3a3a3a",
                  borderRadius: 10,
                  padding: "12px 16px",
                  color: "#fff",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
              />
            </div>
          ))}

          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                fontSize: "0.9rem",
                color: "#bbb",
                display: "block",
                marginBottom: 8,
              }}
            >
              Message:
            </label>
            <textarea
              placeholder="Your message..."
              style={{
                width: "100%",
                background: "#2c2c2c",
                border: "1px solid #3a3a3a",
                borderRadius: 10,
                padding: "12px 16px",
                color: "#fff",
                fontSize: "0.95rem",
                outline: "none",
                minHeight: 100,
                resize: "vertical",
              }}
            />
          </div>

          <button
            style={{
              background: cyan,
              color: dark,
              padding: "12px 32px",
              borderRadius: 50,
              border: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            Send Now
          </button>
        </div>
      </footer>
    </div>
  );
}
