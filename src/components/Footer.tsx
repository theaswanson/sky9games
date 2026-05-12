import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box
    sx={{
      padding: 2,
    }}
  >
    <Typography variant='subtitle2'>
      sky9.games is a fan site and is not affiliated with{" "}
      <a href='https://sky9games.com' target='_blank'>
        Sky9 Games
      </a>
      .
    </Typography>
  </Box>
);
