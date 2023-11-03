import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootContainer = styled("div")(({ theme }) => ({
  padding: "80px 80px",
  display: "flex",
  flexDirection: "row",
  justifyContent:"center",
  gap: "80px",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));

const PersonImage = styled("img")(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("lg")]: {
    width: "250px",
  },
}));

function AboutMe() {
  const theme = useTheme();

  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <RootContainer id = "about">
      {isMdOrUp && <PersonImage src="pro.png" />}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin:"5%"
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: "#ffc107",
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            color: "#fff",
          }}
        >
         I have a very big personality considering the size of my head.

I am capable of learning multiple tricks, not especially good talker, but can speak some and can definitely understand everything you say. 
I am known as the best therapist in the whole god damn world!
        </Typography>
        <Typography
          variant="button1"

          style={{
            color: "#fff",

          }}
        >
          <div style ={{display:'flex',justifyContent: "flex-start",}}>
          <button style={{
            width: "180px",
            height: "50px",
            borderWidth: "3px",
            backgroundColor: "#ffc107",
            borderColor: "#ffc107",
            borderRadius: "20px",
            fontSize: 20,
            color: "white"
          }}>Download CV</button>
          <button style={{
            width: "180px",
            marginLeft:"15px",
            height: "50px",
            borderWidth: "3px",
            backgroundColor: "#282c34",
            borderColor: "#ffc107",
            borderRadius: "20px",
            fontSize: 20,
            color: "white"
          }}>Portfolio</button>
          </div>
        </Typography>
      </div>
    </RootContainer>
  );
}

export default AboutMe;