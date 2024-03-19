import { Box, Stack } from "@mui/material";

const Client = () => {
  return (
    <Box sx={{ width: "100%", px: 14, py: { xs: 84, md: 5 }, bg: "gray.100" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={5}
        sx={{ maxWidth: 1064, mx: "auto" }}
      >
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 10%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="images/img_mask_groupamazone.png"
            alt="image"
            style={{ height: 36, width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 12%" },
            display: "flex",
            justifyContent: "center",
            alignSelf: "start",
            mt: { xs: 1, md: 0 },
          }}
        >
          <img
            src="images/img_mask_group_26x124.png"
            alt="image_one"
            style={{ height: 26, width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 11%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="images/img_mask_group_27x116.png"
            alt="image_two"
            style={{ height: 27, width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 14%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="images/img_mask_group_23x144.png"
            alt="image_three"
            style={{ height: 23, width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 10%" },
            display: "flex",
            justifyContent: "center",
            alignSelf: "start",
          }}
        >
          <img
            src="images/img_mask_group_34x102.png"
            alt="image_four"
            style={{ height: 34, width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Client;
