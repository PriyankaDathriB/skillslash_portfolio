import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Carousel from 'react-material-ui-carousel'
import { Typography, styled } from "@mui/material";
import profiles from '../data/profiles';


const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  

  display: 'flex', flexDirection:"column",justifyContent: 'center',
  
}));

const DetailsCard = styled("Card")(({ theme }) => ({
 width:"100%",
 alignItems:"center"

}));
const ProfileImage = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "40px",
  justifyContent:"center"
}));
const QuoteImage = styled("img")(({ theme }) => ({
  width: "50px",
  height: "50px",
 
}));


function Testimonials() {


  return (
    <RootContainer id="testimonials">
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: "#ffc107", textAlign: "center" }}
        marginBottom="4rem"
      >
        Testimonials
      </Typography>
      <Carousel
      IndicatorIcon={<HorizontalRuleIcon/>}
     
      >
        {
          profiles.map((item, i) => (
            <DetailsCard>
              <QuoteImage src={item.quoteUrl} />
              <br/>
              <p style ={{fontSize: 15,}}>{item.description}</p>
              <ProfileImage src={item.profileUrl} />
              <h3 style ={{fontSize: 15,}}>{item.author}</h3>
              <h5 style ={{fontSize: 15,color: "#ffc107"}}>{item.role}</h5>
            </DetailsCard>


          ))
        }
      </Carousel>
    </RootContainer>
  )
}

export default Testimonials;

