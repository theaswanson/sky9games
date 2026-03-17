import { Home } from "./Home";
import { LandingPage } from "./LandingPage";

const App = () => (import.meta.env.DEV ? <Home /> : <LandingPage />);

export default App;
