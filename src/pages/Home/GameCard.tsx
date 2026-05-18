import type { PropsWithChildren } from "react";
import { NavLink } from "react-router";

export const GameLink = ({
  url,
  isExternal,
  children,
}: PropsWithChildren<{
  url: string;
  isExternal: boolean;
}>) =>
  isExternal ? (
    <a href={url} target="_blank" style={{ display: "contents" }}>
      {children}
    </a>
  ) : (
    <NavLink to={url}>{children}</NavLink>
  );

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
    <img
      src={image}
      style={{
        width: "100%",
        borderRadius: 8,
        aspectRatio: 16 / 9,
      }}
    />
  </GameLink>
);
