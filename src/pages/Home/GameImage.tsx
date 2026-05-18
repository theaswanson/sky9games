export const GameImage = ({ src }: { src: string }) => (
  <img
    src={src}
    style={{
      width: "100%",
      borderRadius: 8,
      aspectRatio: 16 / 9,
    }}
  />
);
