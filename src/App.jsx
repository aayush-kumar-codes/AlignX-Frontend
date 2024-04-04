import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { Box, Stack } from "@mui/material";
import { Navbar } from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [Animation, setAnimation] = useState(false)
  console.log(Animation,'dsfasdf');
  return (
    <Box sx={{ display: " flex", flexDirection: "column", height: "100vh" ,p:'0',justifyContent:"space-between"}}>
      <Stack sx={{width:'100%'}}
      >
        <Navbar setAnimation={setAnimation} />
        <Stack sx={{width:'80%',m:"auto",py:"20px"}}>
        <Outlet context={Animation} />
        </Stack>
      </Stack>
      <Box style={{ flexShrink: 0}}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
