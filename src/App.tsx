import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {
  if (!import.meta.env.DEV) {
    return <LandingPage />;
  }

  return (
    <>
      <Home />
      <Footer />
    </>
  );
};
