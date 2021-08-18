import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function HomeSection2() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.containerColor}>
        <Container maxWidth="lg">
          <Box className={classes.traveller}>
            <Grid container>
              <Grid item sm={12} md={6}>
                <Box>
                  <img
                    src="images/home/home-traveler.png"
                    alt="traveller"
                    className={classes.travellerImage}
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box className={classes.travellerContent}>
                  <Box pb={3}>
                    <Typography variant="h5" color="initial">
                      Why book a home test kit with Corona Test Centre?
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="initial" gutterBottom>
                    The reliability and safety of our best-rated in-clinic
                    experience, delivered to your door.
                  </Typography>
                  <Typography variant="body1" color="initial" gutterBottom>
                    Travel with complete peace of mind, with a Fit To Fly
                    certificate delivered as quickly as 48 hours.
                  </Typography>
                  <Typography variant="body1" color="initial" gutterBottom>
                    Simple instructions to self-administer your test in the
                    comfort of your own home.
                  </Typography>
                  <Typography variant="body1" color="initial" gutterBottom>
                    We're here whenever you need us. Call our dedicated home kit
                    helpline on 020 3966 6694.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <Box
        pt={4}
        pb={4}
        margin="auto"
        maxWidth="500px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <img src="images/home/fit-to-fly.svg" alt="fit to fly" />
        <Box pt={3}>
          <Typography variant="h5" color="initial">
            Get your Fit to Fly Doctor Certificate with Corona Test Centre
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  containerColor: {
    backgroundColor: "#fff7ec",
  },
  traveller: {
    // alignItems: "center",
  },
  travellerImage: {
    paddingTop: "40px",
    maxWidth: "80%",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "500px",
      width: "auto",
      marginLeft: "50px",
    },
  },
  travellerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "left",
    margin: "120px 40px",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 40px",
    },
  },
}));
