import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // Apple Icon Design
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(to right, #8B5CF6, #EC4899, #06B6D4)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
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
