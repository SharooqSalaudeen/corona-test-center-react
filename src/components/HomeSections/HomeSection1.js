import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default function HomeSection1() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sm={12} md={6}>
          <div className={classes.leftSection}>
            <Box width="100%">
              <Typography variant="h2">Private Covid Travel Tests</Typography>
              <Typography varaint="body1">
                With more 5-star reviews than any other clinic, we're a leading
                government recognised provider of all COVID-19 tests with clinic
                locations nationwide.
              </Typography>
              <Box m={4} textAlign="center">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Choose Test
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div>
            <Box display="flex" justifyContent="flex-end">
              <img
                src="/images/home/hero-image.jpeg"
                alt="background"
                className={classes.background}
              />
            </Box>
          </div>
        </Grid>
      </Grid>
      <Box
        maxWidth="800px"
        margin="auto"
        // alignItems="center"
        // display="flex"
        // justifyContent="center"
      >
        <div className={classes.testmonyWrap}>
          <div>
            <img
              src="/images/home/star-rating.png"
              alt="star rating"
              height="24px"
            />
            <img
              src="/images/home/star-rating.png"
              alt="star rating"
              height="24px"
            />
            <img
              src="/images/home/star-rating.png"
              alt="star rating"
              height="24px"
            />
            <img
              src="/images/home/star-rating.png"
              alt="star rating"
              height="24px"
            />
            <img
              src="/images/home/star-rating.png"
              alt="star rating"
              height="24px"
            />
          </div>
          <Typography variant="h6" color="initial">
            "Second time I’ve used the Corona Test Centre for a PCR test to
            travel abroad. Both times they’ve been fast, reliable and highly
            professional."
          </Typography>
          <Typography variant="h5" color="initial">
            Ipek O.
          </Typography>
          <div>
            <Typography variant="caption" color="initial">
              Powered By
            </Typography>
            <img
              src="/images/home/reviews-logo.png"
              alt="reviews logo"
              height="24px"
            />
          </div>
        </div>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    padding: "16px 40px",
  },
  leftSection: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    // margin: "20px 30px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      // margin: "50px 30px",
    },
  },
  background: {
    objectFit: "cover",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      // height: "60vh",
      marginLeft: "20%",
    },
  },
  testmonyWrap: {
    width: "100%",
    height: "auto",
    backgroundColor: "#e9f3f5",
    padding: "18px 0 5% 10%",
    borderRadius: "50px 0 50px 50px",
  },
}));
