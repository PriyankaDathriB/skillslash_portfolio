import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitter,faFacebook,faSkype,faDribbble } from '@fortawesome/free-brands-svg-icons'


const RootContainer = styled("div")(({ theme }) => ({
  padding: "80px 80px",
  flexGrow:1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));

const iconItems =[
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
    title: "twitter",
   
  },
  {
    icon: <FontAwesomeIcon icon={faFacebook} />,
    title: "facebook",
   
  },
  {
    icon: <FontAwesomeIcon icon={faDribbble} />,
    title: "dribble",
   
  },
  {
    icon: <FontAwesomeIcon icon={faSkype} />,
    title: "skype",
   
  },
 ]

function Footer() {
 
  return (
    <RootContainer>
      <div style = {{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent:"center"
      }}>
     
        
         {iconItems.map((item)=>(
          <Typography
          variant="img"
          gutterBottom
          style={{
            color: "#ffc107",  
          }}
        >
          {item.icon}
          </Typography>
         ))}
     </div>
        <Typography
          variant="h7"
          
          style={{
            color: "#fff",
            alignSelf:"center",
            fontSize: 20
          }}
          marginBottom="5px"
        >
         All Rights Recieved 2023
        </Typography>
       
      
    </RootContainer>
  );
}

export default Footer;