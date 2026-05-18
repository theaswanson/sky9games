import { Typography } from "@mui/material";
import { NavLink } from "react-router";
import { GameImage } from "../../Home/GameImage";

export const StrikeForceHeroes = () => (
  <div>
    <NavLink to="/">{"<"} Back</NavLink>

    <Typography variant="h3">Strike Force Heroes</Typography>

    <GameImage src="/images/games/sfh.png" />
  </div>
);
