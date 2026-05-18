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
