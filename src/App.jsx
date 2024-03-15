import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Features from "./pages/Features/Features";
import Features1 from "./pages/Features1/Features";
import Cta from "./pages/cta";
import Testimonials from "./pages/Testimonials/Testimonials";
import Features2 from "./pages/Features2/Features2";
import OurTeam from "./pages/ourteam/OurTeam";
import Footer from "./components/footer";

function App() {
  return (
    <box>
      <Header />
      <Outlet />
      <Features />
      <Features1 />
      <Features2 />
      <Cta />
      <Testimonials />
      <OurTeam />
      <Footer />
    </box>
  );
}

export default App;
