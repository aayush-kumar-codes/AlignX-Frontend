import {Stack } from "@mui/material";
import "./HomePage.css";



export const Home = () => {
  return (
    <>
        <Stack sx={{ height: "600px", bgcolor: "#034844", position: "relative" }}>
        <div className="home-dashboard-containersss">
          <div className="home-business-content">
            Revolutionize Your Business with Our Universal SaaS Template
          </div>
          <div className="home-user-content">
            Welcome to the future of business innovation! Discover the ultimate
            solution to elevate your company's performance with our versatile
            SaaS template, designed to meet the unique needs of any industry.
          </div>
          <div className="dashboard-input-box">
            <input
              type="text"
              className="home-input-box"
              placeholder="Enter your Email Address"
            />
            <button className="dashboard-input-button">Get Started</button>
          </div>
        </div>
      <Stack
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: { md: "auto", sm: "100px", xs: "120px" },
        }}
      >
        <img
          src="images/backgroundFream.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </Stack>
      <Stack
        sx={{
          height: { lg: "600px", md: "462px", sm: "378px", xs: "260px" },
          width: { sm: "80%", xs: "100%" },
          position: "absolute",
          bottom: { lg: "-66%", md: "-50%", sm: "-40%", xs: "-19.2%" },
          left: { lg: "9%", md: "8%", sm: "8%", xs: "0" },
        }}
      >
        <img
          src="images/HomeDashboard.png"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </Stack>
    </Stack>
      {/* </Box> */}
      <img src="images/Company_Logo.png" alt="" className="companyLogo" />
    </>
  );
};
