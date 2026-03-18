import { Typography } from "@mui/material";
import "./Home.css";
import { Navigation } from "./Navigation";

export const Home = () => (
  <div>
    <Navigation />
    <section id='center'>
      <div>
        <Typography variant='h2'>Fan Site</Typography>
      </div>
    </section>
  </div>
);
