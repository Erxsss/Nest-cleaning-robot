"use client";

import { useState } from "react";

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
  {
    name: "B.Erkhes",
    role: "Code, Website & Design",
    active: true,
    img: "https://i.pinimg.com/736x/0a/21/26/0a2126d2e6f3bdd4f8ef6e0ccfbd9c1d.jpg",
  },
  {
    name: "U.Nyambayar",
    role: "Design, Code & Documents",
    active: false,
    img: "https://i.pinimg.com/736x/0a/21/26/0a2126d2e6f3bdd4f8ef6e0ccfbd9c1d.jpg",
  },
  {
    name: "A.Molor",
    role: "Code, Design & Website",
    active: false,
    img: "https://i.pinimg.com/736x/0a/21/26/0a2126d2e6f3bdd4f8ef6e0ccfbd9c1d.jpg",
  },
];

type Message = {
  name: string;
  email: string;
  message: string;
};

type Input = {
  name: string;
  email: string;
  message: string;
};

export default function CleroLanding() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<Input>({
    name: "",
    email: "",
    message: "",
  });

  const add = () => {
    if (!input.name && !input.email && !input.message) return;
    setMessages((prev) => [...prev, { ...input }]);
    setInput({ name: "", email: "", message: "" });
  };

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
          {["About", "Team", "Tech", "Explore"].map((link) => (
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
          <div
            style={{
              flex: "0 0 45%",
              animation: "floatRobot 4s ease-in-out infinite",
            }}
          >
            <img
  src="https://zoxowmwtwran1uwo.public.blob.vercel-storage.com/image-removebg-preview.png"
  alt="CLERO Robot"
  style={{ width: "100%", maxWidth: 900, height: "800px", objectFit: "contain" }}
/>
          </div>

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
                Useful
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
          Клэро нь автомат болон гар утаснаас удирдах боломжтой, мотор болон
          усны насос ашиглан цэвэрлэгээ хийдэг ухаалаг робот юм.
        </p>

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
    background: "#f0f0f0", // base color
  }}
>
  {/* Full background gradient from left to right */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, #f0f0f0 0%, #f0f0f0 40%, #e8d5bc 70%, #c8a882 100%)",
    }}
  />

  {/* Optional: subtle shadow under the image for depth */}
  <img
    src="https://zoxowmwtwran1uwo.public.blob.vercel-storage.com/Gemini_Generated_Image_tnon8ztnon8ztnon-removebg-preview%20%281%29.png"
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
                  overflow: "hidden",
                }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
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

      {/* ── EXPLORE THE PROJECT ── */}
      <section
        id="explore"
        style={{ padding: "100px 48px", background: "#fff" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: cyan,
                marginBottom: 12,
              }}
            >
              Демо, код, баримт бичиг
            </p>
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(2.4rem,5vw,3.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Төслийн дэлгэрэнгүй
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: "1.05rem",
                color: "#555",
                maxWidth: 520,
                margin: "16px auto 0",
                lineHeight: 1.7,
              }}
            >
              Манай төслийн бүх материал — схем, код — бүгд нээлттэй. Та судалж,
              ашиглаж, хөгжүүлж болно.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 24,
            }}
          >
            {/* ── DOCS card ── */}
            <a
              href="https://docs.google.com/document/d/1qNOlmlPniCOiaoXbCDGlBizu9pU-jPYnZBmJGvOtfR8/edit?usp=sharing"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1.5px solid #e8e8e8",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    background: "#f7f7f7",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1.5px solid #e8e8e8",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 130,
                      background: "#fff",
                      borderRadius: 8,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                      padding: "16px 14px",
                    }}
                  >
                    <div
                      style={{
                        width: "60%",
                        height: 6,
                        background: "#111",
                        borderRadius: 3,
                        marginBottom: 10,
                      }}
                    />
                    <div
                      style={{
                        width: "100%",
                        height: 3,
                        background: "#ddd",
                        borderRadius: 2,
                        marginBottom: 5,
                      }}
                    />
                    <div
                      style={{
                        width: "85%",
                        height: 3,
                        background: "#ddd",
                        borderRadius: 2,
                        marginBottom: 5,
                      }}
                    />
                    <div
                      style={{
                        width: "90%",
                        height: 3,
                        background: "#ddd",
                        borderRadius: 2,
                        marginBottom: 5,
                      }}
                    />
                    <div
                      style={{
                        width: "70%",
                        height: 3,
                        background: "#ddd",
                        borderRadius: 2,
                        marginBottom: 14,
                      }}
                    />
                    <div
                      style={{
                        width: "55%",
                        height: 5,
                        background: "#111",
                        borderRadius: 3,
                        marginBottom: 8,
                      }}
                    />
                    <div
                      style={{
                        width: "100%",
                        height: 3,
                        background: "#ddd",
                        borderRadius: 2,
                        marginBottom: 5,
                      }}
                    />
                    <div
                      style={{
                        width: "80%",
                        height: 3,
                        background: "#ddd",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      background: dark,
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    DOCX
                  </div>
                </div>

                <div
                  style={{
                    padding: "28px 28px 32px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "#f0f0f0",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                      }}
                    >
                      📄
                    </div>
                    <span
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 800,
                      }}
                    >
                      Documentation
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    Төслийн бүрэн тайлан — төхөөрөмжийн үзүүлэлт, хэлхээний
                    зураг, усны насос, моторын удирдлага, аппын Bluetooth
                    холболт.
                  </p>
                  <div
                    style={{
                      marginTop: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.82rem",
                      color: cyan,
                      fontWeight: 700,
                    }}
                  >
                    <span>Read the docs</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>

            {/* ── PPT card ── */}
            <a
              href="https://canva.link/2o4040ete9ocn20"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1.5px solid #e8e8e8",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    background: dark,
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      CLERO
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: "#888",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      Cleaning robot
                    </div>
                    <div
                      style={{
                        width: 40,
                        height: 2,
                        background: cyan,
                        borderRadius: 1,
                        margin: "10px auto 0",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      background: "#ff6b35",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    PPTX
                  </div>
                </div>

                <div
                  style={{
                    padding: "28px 28px 32px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "#fff3ef",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                      }}
                    >
                      📊
                    </div>
                    <span
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 800,
                      }}
                    >
                      Presentation
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    Сургуулийн demo өдөр ашигласан презентац — асуудал, шийдэл,
                    ашигласан технологи (өмнө/дараа харьцуулалт).
                  </p>
                  <div
                    style={{
                      marginTop: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.82rem",
                      color: "#ff6b35",
                      fontWeight: 700,
                    }}
                  >
                    <span>View slides</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>

            {/* ── GITHUB card ── */}
            <a
              href="https://github.com/Erxsss/Nest-cleaning-robot"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1.5px solid #e8e8e8",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    background: "#0d1117",
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#58a6ff",
                      fontFamily: "monospace",
                      marginBottom: 8,
                    }}
                  >
                    Erxsss / Nest-cleaning-robot
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 16,
                    }}
                  >
                    Nest-cleaning-robot
                  </div>
                  <div style={{ display: "flex", gap: 20 }}>
                    {[
                      ["⭐", "Stars", "0"],
                      ["🍴", "Forks", "0"],
                      ["👁️", "Watch", "1"],
                    ].map(([icon, label, val]) => (
                      <div key={label} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "0.65rem", color: "#888" }}>
                          {icon} {label}
                        </div>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            color: "#ccc",
                          }}
                        >
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background:
                        "linear-gradient(90deg,#58a6ff,#3fb950,#58a6ff)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      background: "#238636",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    PUBLIC
                  </div>
                </div>

                <div
                  style={{
                    padding: "28px 28px 32px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "#f0f0f0",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                      }}
                    >
                      🐙
                    </div>
                    <span
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 800,
                      }}
                    >
                      GitHub Repo
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    Бүх код нээлттэй — Arduino код, веб сайт бүгд багтсан. Хуулж
                    авч, моторын логикыг судалж, өөрөө сайжруулж болно.
                  </p>
                  <div
                    style={{
                      marginTop: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.82rem",
                      color: "#238636",
                      fontWeight: 700,
                    }}
                  >
                    <span>View on GitHub</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
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

          {/* Name */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                fontSize: "0.9rem",
                color: "#bbb",
                display: "block",
                marginBottom: 8,
              }}
            >
              Contact Name:
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={input.name}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, name: e.target.value }))
              }
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

          {/* Email */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                fontSize: "0.9rem",
                color: "#bbb",
                display: "block",
                marginBottom: 8,
              }}
            >
              Mail:
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={input.email}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, email: e.target.value }))
              }
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

          {/* Message */}
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
              value={input.message}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, message: e.target.value }))
              }
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
            onClick={add}
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

          {/* ── MESSAGES LIST ── */}
          {messages.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <p
                style={{
                  color: cyan,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Messages ({messages.length})
              </p>
              {messages.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: "#2a2a2a",
                    border: "1px solid #3a3a3a",
                    borderRadius: 12,
                    padding: "16px 20px",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      {m.name}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>
                      {m.email}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#bbb",
                      lineHeight: 1.6,
                    }}
                  >
                    {m.message}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
