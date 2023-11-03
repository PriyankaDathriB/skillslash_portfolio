import { Card, Grid, Typography, styled } from "@mui/material";
import blogs from "../data/blogs";


const BlogCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#212222",
  width:"320px",
  [theme.breakpoints.down("lg")]: {
    width: "250px",
  },
  
}));


const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width:'100%',
 
  padding: "80px 80px",
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },

}));


const BlogImage = styled("img")(({ theme }) => ({
  width: "320px",
  display:'flex',
  justifyContent:'center',
  [theme.breakpoints.down("lg")]: {
    width: "250px",
  },
  
}));

function Blog() {

  return (
    <RootContainer id="blog">
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: "#ffc107" }}
        marginBottom="4rem">
        Our Blog
      </Typography>
     
      <Grid container>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>

            <BlogCard>
              <BlogImage src={blog.imgUrl} />
              <h3 style={{ fontSize: 20 }}>{blog.title}</h3>
              <h5 style={{ fontSize: 15,color: "#ffc107"}}>{blog.subTitle}</h5>
              <p style={{ fontSize: 15, }}>{blog.description}</p>

            </BlogCard>

          </Grid>
        ))}
      </Grid>
     
    </RootContainer>
  );
}

export default Blog;