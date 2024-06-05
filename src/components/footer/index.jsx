import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavLinkData } from '../StaticData/navLinkData';
import ScrollToTop from '../scrollToTop';
import {useNavigate} from 'react-router-dom'
const Footer = () => {
  const navigate=useNavigate()
  const hanNavigate=(path)=>{
navigate(path)
  }
  return (
    <Box sx={{ backgroundColor: '#f0f1f2', color: '#000' }}>
      <Box
        // p={4}
        sx={{
          m: ' auto ',
          display: 'flex',
          width:'80%',
          py:'20px',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Link to={'/'}>
          <Box
            sx={{
              textAlign: { xs: 'start', md: 'center' },
              display: 'flex',
              justifyContent: 'start',
              flexDirection: 'column',
            }}
          >
              <img src="/aliLogo.png" alt="logo" width={'150px'} />
           </Box>
        </Link>
 
        <Stack direction={{md:'row',xs:'column'}}
          mt={{ xs: '15px', md: '21px' }}
          ml={{xs:"18px",md:"0px"}}
          gap={5}
        >
          {NavLinkData.map((navItem, i) => (
            <Stack  key={i} >
              <Typography onClick={()=>hanNavigate(navItem.path)}
                sx={{ fontFamily: 'Urbanist', fontWeight: 'bold',cursor:'pointer' }}
                variant="body1"
              >
                {navItem.name}
              </Typography>
              {navItem.list && navItem.list.map((subItem, j) => (
                <Box key={j}>
                  <Link
                    to={subItem.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'DM Sans',
                        fontWeight: '500',
                        width: '100%',
                        color: '#424542',
                        my: 1,
                        ':hover': { color: 'grey' },
                      }}
                    >
                      {subItem.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Stack>
          ))}
        </Stack>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            gap: 2,
          }}
          mt={{ xs: '15px', md: '21px' }}
          ml={{xs:"18px",md:"0px"}}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Urbanist',
                fontWeight: 'bold',
                fontStyle: 'normal',
              }}
            >
              Get in touch
            </Typography>
            <Typography
              // pt={1}
              sx={{ fontFamily: 'DM Sans', fontWeight: 400 }}
              variant="body1"
            >
              rithviknaga@alignx.ai
            </Typography>
          </Box>
        </Box>
      </Box>
      <Stack sx={{ alignItems: 'center', bgcolor: '#3d3d3d', color: '#fff' }}>
        <Typography variant="body1" sx={{ p: '10px' }}>
          &copy; 2024. AlignX
        </Typography>
      </Stack>
      <ScrollToTop />
    </Box>
  );
};

export default Footer;

// import { Box, Link, Stack, Typography } from "@mui/material";
// import React from "react";
// import { NavLinkData } from "../StaticData/navLinkData";

// const index = () => {
//   return (
//     <>
//       <Stack  >
//         <Stack direction={'row'} sx={{justifyContent:'space-between',p:'12px 126px',alignItems:'center'}}>
//           <Stack>
//           <img src="/images/AlignX-Logo.png" alt="logo" width={"150px"} />
//           </Stack >
//           {
//             NavLinkData.map((e,i)=>{
//               return (<Stack  key={i}>
//                 <Typography variant="body1" sx={{fontWeight:'bold'}}>
//                   {e.name}
//                 </Typography>
//                 {e.list.map((item)=>{
//                   return (
//                     <Link href={item.link} target={item.target? "_blank":"_self"} underline='none'></Link>
//                   )
//                 })}
//               </Stack>)
//             })
//           }
//           <Typography variant="body1" sx={{fontWeight:'bold'}}>Get In Touch</Typography>
//         </Stack>
//         <Stack sx={{ alignItems: "center", bgcolor: "#3d3d3d", color: "#fff" }}>
//         <Typography variant="body1" sx={{ p: "10px" }}>
//            &copy; 2024. AlignX
//        </Typography>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// export default index;
