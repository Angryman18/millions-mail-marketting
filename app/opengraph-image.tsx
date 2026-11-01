import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f9f9ff",
        padding: 72,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 48,
            height: 48,
            background: "#00327d",
            borderRadius: 12,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 10,
            gap: 3,
          }}
        >
          <div style={{ width: 6, height: 12, background: "white" }} />
          <div style={{ width: 6, height: 18, background: "white" }} />
          <div style={{ width: 6, height: 24, background: "white" }} />
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 650,
            color: "#111c2d",
            letterSpacing: -1,
          }}
        >
          Millions Mail
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 650,
            color: "#111c2d",
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Powerful campaigns. Effortless execution.
        </div>
        <div style={{ fontSize: 26, color: "#434653", maxWidth: 780 }}>
          Create, schedule, and run campaigns while keeping control of your sending infrastructure.
        </div>
      </div>
      <div style={{ fontSize: 20, color: "#00327d", fontWeight: 600 }}>Beta Coming Soon</div>
    </div>,
    { ...size },
  );
}
