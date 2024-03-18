import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Header/Navbar";
import Footer from "./components/footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
