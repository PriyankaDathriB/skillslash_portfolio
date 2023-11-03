import { Typography, styled, Box, Input } from "@mui/material";
import iconAddr from "../data/address";



const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "80px 80px",
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));
const Item = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  height: "100%",
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  borderRadius: '10px',
  width: '100%'
}));

const MainDiv = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex", flexDirection: "row", justifyContent: "center", gap: '40px' ,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width:"90%"
  },
}));

function KeepInTouch() {
  return (
    <RootContainer id="contact">
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: "#ffc107", textAlign: "center" }}
        marginBottom="4rem"
      >
        Keep In Touch
      </Typography>

     <MainDiv>
     
      
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 6">
              <Item placeholder="Name" />
            </Box>
            <Box gridColumn="span 6">
              <Item placeholder="Email" />
            </Box>

            <Box gridColumn="span 12">
              <Item placeholder="Subject" />
            </Box>
            <Box gridColumn="span 12" height="120px">
              <Item placeholder="Message" />
            </Box>
            <Box gridColumn="span 12" >
              <button style={{
                width: "100%",
                height: "50px",
                borderWidth: "3px",
                backgroundColor: "#ffc107",
                borderColor: "#ffc107",
                borderRadius: "10px",
                fontSize: 20,
                color: "white"
              }}>Send Now!</button>
            </Box>
          </Box>
       

        <div style={{ textAlign: "left", alignSelf: "left" }}>
          {iconAddr.map((item) => (
            <Typography
              variant="body2"
              gutterBottom
              style={{ color: "white" }}
              marginBottom="4rem"
            >
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" ,fontSize:'15px'}}>
                {item.icon}
                
                {item.description1}
                <br></br>
                {item.description2}

              </div>
            </Typography>
          ))}
        </div>
      </MainDiv>

    </RootContainer>
  );
}

export default KeepInTouch;