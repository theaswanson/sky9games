import { Box, Stack } from "@mui/material";
import { Logo } from "../../components/Logo";
import { GameGrid } from "./GameGrid";

const Header = () => (
  <Stack alignItems='center' sx={{ paddingTop: 8, paddingBottom: 8 }} gap={4}>
    <Box sx={{ width: { xs: "100%", sm: "500px", md: "600px", lg: "700px" } }}>
      <Logo style={{ width: "100%" }} />
    </Box>
  </Stack>
);

export const Home = () => (
  <Box sx={{ padding: 2, maxWidth: 1488, margin: "0 auto", flexGrow: 1 }}>
    <Stack gap={2}>
      <Header />
      <GameGrid />
    </Stack>
  </Box>
);
