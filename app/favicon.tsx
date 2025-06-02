import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // Favicon Design
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(to right, #8B5CF6, #EC4899, #06B6D4)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        DM
      </div>
    ),
    {
      ...size,
    }
  );
}
