import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#ffffff",
          color: "#0a0a0a",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            padding: "56px 64px",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              letterSpacing: "-0.03em",
            }}
          >
            <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 0.9 }}>RS</div>
            <div
              style={{
                marginTop: 8,
                fontSize: 36,
                fontWeight: 600,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              DEV
            </div>
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              maxWidth: 920,
              lineHeight: 1.35,
              color: "#333333",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Sites, bespoke tools, search, and campaign advice
          </div>

          <div style={{ fontSize: 22, color: "#555555", fontFamily: "Arial, sans-serif" }}>
            Written plans · plain updates · results you can count
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

