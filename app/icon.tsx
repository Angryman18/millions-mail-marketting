import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "#00327d",
          borderRadius: 8,
          paddingBottom: 6,
          gap: 2,
        }}
      >
        <div style={{ width: 5, height: 10, background: "white" }} />
        <div style={{ width: 5, height: 14, background: "white" }} />
        <div style={{ width: 5, height: 18, background: "white" }} />
      </div>
    ),
    { ...size },
  );
}
