import { ImageResponse } from "next/og";

// Dynamically rendered 1200x630 social card in the retro handheld-pager / LCD
// style of the app icon: charcoal casing, olive-green LCD with a bell glyph and
// a red indicator dot, chunky buttons, and a warm amber glow leaking from the
// top-left corner. Lives at the app root so it is the default OG/Twitter image
// for every route (blog posts merge their own title/description over it).

export const runtime = "nodejs";
export const alt =
  "NotifyMe — self-hosted webhook notifications, straight to your phone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palette mirrored from globals.css @theme tokens.
const CASING = "#1f2328";
const CASING_LIGHT = "#2b2f35";
const CASING_EDGE = "#14171b";
const LCD = "#c8d99a";
const LCD_DIM = "#aebe7d";
const LCD_SCREEN = "#a9b985";
const ALERT = "#ef3b1f";
const AMBER = "#c9824d";
const GRAPHITE = "#15181c";
const GRAPHITE_DEEP = "#101317";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: GRAPHITE,
          backgroundImage: `radial-gradient(120% 90% at 0% 0%, rgba(201,130,77,0.22) 0%, rgba(201,130,77,0) 48%)`,
          fontFamily: "monospace",
        }}
      >
        {/* Left: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "620px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: AMBER,
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "9999px",
                backgroundColor: ALERT,
              }}
            />
            Self-hosted alerts
          </div>

          <div
            style={{
              marginTop: "28px",
              fontSize: "84px",
              fontWeight: 800,
              color: LCD,
              lineHeight: 1.05,
            }}
          >
            NotifyMe
          </div>

          <div
            style={{
              marginTop: "24px",
              fontSize: "34px",
              color: LCD_DIM,
              lineHeight: 1.35,
            }}
          >
            Webhook notifications, straight to your phone.
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              padding: "18px 24px",
              borderRadius: "10px",
              backgroundColor: GRAPHITE_DEEP,
              border: `2px solid ${CASING_LIGHT}`,
              color: LCD,
              fontSize: "26px",
            }}
          >
            <span style={{ color: AMBER }}>POST</span>
            <span style={{ marginLeft: "16px", color: LCD_DIM }}>
              /webhook/&#123;token&#125;
            </span>
          </div>
        </div>

        {/* Right: pager device */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "380px",
            height: "380px",
            padding: "34px",
            borderRadius: "44px",
            background: `linear-gradient(180deg, ${CASING_LIGHT} 0%, ${CASING} 100%)`,
            border: `6px solid ${CASING_EDGE}`,
            boxShadow: "0 24px 60px -20px rgba(0,0,0,0.8)",
          }}
        >
          {/* LCD screen */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              height: "210px",
              borderRadius: "16px",
              background: `linear-gradient(180deg, ${LCD_SCREEN} 0%, ${LCD_DIM} 100%)`,
              border: `4px solid ${CASING_EDGE}`,
            }}
          >
            {/* Bell glyph — drawn with shapes so it renders without emoji fonts */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* top nub */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "9999px",
                  backgroundColor: GRAPHITE_DEEP,
                  marginBottom: "2px",
                }}
              />
              {/* bell body */}
              <div
                style={{
                  width: "108px",
                  height: "84px",
                  backgroundColor: GRAPHITE_DEEP,
                  borderTopLeftRadius: "54px",
                  borderTopRightRadius: "54px",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                }}
              />
              {/* rim */}
              <div
                style={{
                  width: "132px",
                  height: "16px",
                  borderRadius: "9999px",
                  backgroundColor: GRAPHITE_DEEP,
                  marginTop: "3px",
                }}
              />
              {/* clapper */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "9999px",
                  backgroundColor: GRAPHITE_DEEP,
                  marginTop: "6px",
                }}
              />
            </div>
            {/* Red indicator dot */}
            <div
              style={{
                position: "absolute",
                right: "44px",
                bottom: "46px",
                width: "22px",
                height: "22px",
                borderRadius: "9999px",
                backgroundColor: ALERT,
              }}
            />
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "22px",
              marginTop: "34px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                height: "60px",
                borderRadius: "12px",
                background: `linear-gradient(180deg, ${CASING_LIGHT} 0%, ${CASING} 100%)`,
                border: `3px solid ${CASING_EDGE}`,
                color: LCD_DIM,
                fontSize: "40px",
                fontWeight: 700,
                paddingBottom: "6px",
              }}
            >
              {"‹"}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                height: "60px",
                borderRadius: "12px",
                background: `linear-gradient(180deg, ${CASING_LIGHT} 0%, ${CASING} 100%)`,
                border: `3px solid ${CASING_EDGE}`,
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "9999px",
                  backgroundColor: ALERT,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
