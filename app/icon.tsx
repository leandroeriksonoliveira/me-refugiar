import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8D3D4D",
          color: "#E6D3A3",
          fontSize: 34,
          fontFamily: "Georgia, serif",
        }}
      >
        M
      </div>
    ),
    size,
  );
}
