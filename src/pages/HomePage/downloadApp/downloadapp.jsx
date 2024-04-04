import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DownloadsProducts = () => {
  return (
    <Box>
      <Box pt={2} mx="auto" maxWidth={"1250px"} p={1}>
        <Box bgcolor="#fff" overflow="hidden" borderRadius="12px" mx={1} my={2}>
          <Box
            display="flex"
            flexDirection={{ xs: "column-reverse", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            width="100%"
            minWidth={"343px"}
            gap={5}>
            <Box
              display="flex"
              flexDirection="column"
              width={{ xs: "100%", md: "50%" }}
              gap={3}
              order={{ xs: "1", md: "0" }}
              paddingBottom={{ xs: "68px", md: "0px" }}
              margin={{ xs: "0px 20px", md: "0px 0px" }}>
              <Typography
                variant="h2"
                color={"#000"}
                fontWeight={"700"}
                fontFamily={"Urbanist"}
                fontSize={{ xs: "29px", md: "44px" }}
                textAlign={{ xs: "center", md: "start" }}>
                Unlock the Power of AlignX in your hand
              </Typography>
              <Typography
                fontWeight={"400"}
                fontFamily={"DM Sans"}
                variant="body1"
                style={{
                  color: "#000",
                  width: "100%",
                }}
                textAlign={{ xs: "center", md: "start" }}>
                Download our app now and experience the future of productivity.
                Take the first step towards success today.
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={3}
                margin={{ xs: "0px 15px", md: "0px 0px" }}>
                <Box display="flex" justifyContent={"center"}>
                  <Link to={"https://www.apple.com/in/app-store/"} target="_blank">
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      width: { xs: "303px", md: "auto" },
                    }}>
                    <img
                      src="/images/appstore.png"
                      alt="appstoreicon"
                      style={{ height: "59px", width: "204px" }}
                    />
                  </Button>
                  </Link>
                </Box>

                <Box display="flex" justifyContent={"center"}>
                  <Link to={"https://play.google.com/store/apps?hl=en_IN"} target="_blank">
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: { xs: "303px", md: "auto" },
                    }}>
                    <img
                      src="/images/googleplay.png"
                      alt="googleplayicon"
                      style={{ height: "59px", width: "204px" }}
                    />
                  </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: {xs:"center",md:"end"} }}
              width={{ xs: "100%", md: "100%" }}
              order={{ xs: "0", md: "1" }}>
              {/* <img
                src="/images/downloadImg.png"
                alt="image"
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
              /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadsProducts;