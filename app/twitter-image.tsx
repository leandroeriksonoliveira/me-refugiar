import { ImageResponse } from "next/og";

export const alt = "Me Refugiar — Congresso para Mulheres";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #5C2A35 0%, #3F2C24 55%, #8D3D4D 100%)",
          color: "#F7F0E6",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 8, textTransform: "uppercase", color: "#E6D3A3" }}>
          Congresso para Mulheres
        </div>
        <div style={{ fontSize: 96, fontFamily: "Georgia, serif", marginTop: 16, lineHeight: 0.95 }}>
          Me Refugiar
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#E8C8C6", maxWidth: 780 }}>
          Venha descansar. Encontre refúgio. Renove a sua identidade em Deus.
        </div>
        <div style={{ marginTop: 40, fontSize: 22, color: "#C4A35A" }}>
          Com Renata Vitorino Coelho · 12–14 SET 2026
        </div>
      </div>
    ),
    size,
  );
}
