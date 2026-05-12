export const GameCard = ({ image, url }: { image: string; url: string }) => (
  <a href={url} target='_blank' style={{ display: "contents" }}>
    <img
      src={image}
      style={{
        width: "100%",
        borderRadius: 8,
        aspectRatio: 16 / 9,
      }}
    />
  </a>
);
