import { Box, Divider } from "@mui/material";
import BlogContent from "./Blog";
import BlogContent1 from "./Blog1";
import BlogContent2 from "./Blog2";
import BlogContent3 from "./Blog3";
import BlogContent4 from "./Blog4";

const Blog = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Box sx={{ maxWidth: "1250px" }}>
      <BlogContent />
      <Divider sx={{my:4}}/>
      <BlogContent1/>
      <Divider sx={{my:4}}/>
      <BlogContent2/>
      <Divider sx={{my:4}}/>
      <BlogContent3/>
      <Divider sx={{my:4}}/>
      <BlogContent4/>
    </Box>
  );
};

export default Blog;
