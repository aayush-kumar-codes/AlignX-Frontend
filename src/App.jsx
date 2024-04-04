import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { Box, Stack } from "@mui/material";
import { Navbar } from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [Animation, setAnimation] = useState(false)
  console.log(Animation,'dsfasdf');
  return (
    <Box sx={{ display: " flex", flexDirection: "column", minHeight: "100vh" ,p:'0'}}>
      <Stack sx={{width:'100%'}}
      >
        <Navbar setAnimation={setAnimation} />
        <Stack sx={{width:'100%',p:{lg:'0px 83px'}}}>
        <Outlet context={Animation} />
        </Stack>
      </Stack>
      <Box style={{ flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
