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
          background: "linear-gradient(135deg, #583949 0%, #3d2833 55%, #b54a1e 100%)",
          color: "#e8c9bf",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 8, textTransform: "uppercase", color: "#e8c9bf" }}>
          Congresso para Mulheres
        </div>
        <div style={{ fontSize: 96, fontFamily: "Georgia, serif", marginTop: 16, lineHeight: 0.95 }}>
          Me Refugiar
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#dbb0a0", maxWidth: 780 }}>
          Venha descansar. Encontre refúgio. Renove a sua identidade em Deus.
        </div>
        <div style={{ marginTop: 40, fontSize: 22, color: "#e9b586" }}>
          Com Renata Vitorino Coelho · 12–14 SET 2026
        </div>
      </div>
    ),
    size,
  );
}
