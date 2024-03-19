import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { Box } from "@mui/material";
import { Navbar } from "./components/navbar/Navbar";

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
