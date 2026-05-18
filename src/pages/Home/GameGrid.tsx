import { Grid } from "@mui/material";
import { GameCard } from "./GameCard";

const games = [
  {
    title: "Strike Force Heroes",
    image: "/images/games/sfh.png",
    url: "/games/sfh",
    isExternal: false,
  },
  {
    title: "Raze",
    image: "/images/games/raze3.png",
    url: "https://raze.fandom.com/wiki/Raze_Wiki",
    isExternal: true,
  },
  {
    title: "Siegius",
    image: "/images/games/siegius.png",
    url: "https://siegius.fandom.com/wiki/Siegius_Wiki",
    isExternal: true,
  },
];

export const GameGrid = () => (
  <div>
    <Grid container spacing={2}>
      {games.map((game) => (
        <Grid
          key={game.image}
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GameCard
            image={game.image}
            url={game.url}
            isExternal={game.isExternal}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);
