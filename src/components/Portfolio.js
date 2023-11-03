import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import projects from '../data/projects';

const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "80px 80px",
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 1000,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 150,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.9,
      backgroundColor: "#ffc107",

    },

  },
}));



const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
});




const ImageBackdrop = styled('h3')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  borderRadius: 10,
  transition: theme.transitions.create('opacity'),
}));


const Data = styled('span')(({ theme }) => ({
  height: 3,
  position: 'absolute',
  bottom: 180,
  left: 'calc(50% - 30px)',
  transition: theme.transitions.create('opacity'),
}));


export default function Portfolio() {

  return (
    <RootContainer id="portfolio">
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: "#ffc107", textAlign: "center" }}
        marginBottom="4rem"
      >
        Portfolio
      </Typography>
     

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>


        <Grid container spacing={2}>

          {projects.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={index}>

              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: 300, height: 300, gap: 10
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.imgUrl})`, borderRadius: 10 }} />
                <ImageBackdrop className="MuiImageBackdrop-root" ><Data>Brex logo<p>Brand</p> <FontAwesomeIcon icon={faEye} /></Data></ImageBackdrop>

              </ImageButton>

            </Grid>
          ))}
        </Grid>

      </Box>
    </RootContainer>
  );
}