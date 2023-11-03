import { Typography} from "@mui/material";
import { styled } from "@mui/material/styles";

const RootContainer = styled("div")(({ theme }) => ({
  padding: "80px 80px",
  display: "flex",
  flexDirection: "row",
  gap: "80px",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));



function Hero() {
  
  return (
    <RootContainer>
     
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: "#ffc107",
          }}
        >
          Web Developer
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            color: "#fff",
          }}
        >
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vita
        </Typography>
        <Typography
          variant="button1"

          style={{
            color: "#fff",

          }}
        >
          <button style={{
            width: "180px",
            height: "50px",
            borderWidth: "3px",
            backgroundColor: "#282c34",
            borderColor: "#ffc107",
            borderRadius: "20px",
            fontSize: 20,
            color: "white"
          }}>Download CV</button>
        </Typography>
      </div>
    </RootContainer>
  );
}

export default Hero;