import { Grid, Typography, styled } from "@mui/material";
import facts from "../data/facts.js";




const RootContainer = styled("div")(({ theme }) => ({
    backgroundColor:theme.palette.background.default,
    padding: "80px 80px",
    [theme.breakpoints.down("sm")]: {
        padding: "80px 20px",
    },
}));




function Facts() {
    return (
        <RootContainer id="facts">
  
                
                <Grid container spacing={2}>
                    {facts.map((fact, index) => (
                        <Grid item xs={12} sm={6} md={4} xl={3} key={index}>

                        
                                <Typography
                                    variant="h5"
                                    style={{
                                        color: "#ffc107",
                                    }}
                                >
                                    {fact.icon}
                                </Typography>

                                <h3 style ={{fontSize: 20,}}>{fact.number}</h3>
                                <p style ={{fontSize: 20,}}>{fact.description}</p>

                       

                        </Grid>
                    ))}
                </Grid>
                
        </RootContainer>
    );
}

export default Facts;