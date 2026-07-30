import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBytes = await readFile(join(process.cwd(), "public/rs-dev-logo.png"));
  const logoSrc = `data:image/png;base64,${Buffer.from(logoBytes).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 630,
            height: 630,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logoSrc}
            width={320}
            height={320}
            alt="RS Dev"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
