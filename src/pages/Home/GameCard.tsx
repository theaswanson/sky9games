import { GameImage } from "./GameImage";
import { GameLink } from "./GameLink";

export const GameCard = ({
  image,
  url,
  isExternal,
}: {
  image: string;
  url: string;
  isExternal: boolean;
}) => (
  <GameLink url={url} isExternal={isExternal}>
    <GameImage src={image} />
  </GameLink>
);
