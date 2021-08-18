import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Footer from "../components/Footer";

const data = [
  {
    name: "Woking",
    hours: "8am-4pm",
    address: "3 Mercia Walk, Wolsey Place Shopping Centre, Woking GU21 6XS",
    days: "Sat 9am-4pm, Sun Closed",
    url: "/#",
  },
  {
    name: "Liverpool",
    hours: "8am-4pm",
    address: "Room 12, 60 Rodney Street, Liverpool L1 9AD",
    days: "Sat 9am-4pm, Sun Closed",
    url: "/#",
  },
  {
    name: "Bristol",
    hours: "8am-4pm",
    address:
      "Corona Test Centre ℅ Room 19, Southville Clinic, 68 Coronation Road, Southville, Bristol BS3 1AS",
    days: "Sat 9am-4pm, Sun Closed",
    url: "/#",
  },
  {
    name: "Newcastle",
    hours: "8am-4pm",
    address: "3 Mercia Walk, Wolsey Place Shopping Centre, Woking GU21 6XS",
    days: "Sat 9am-4pm, Sun Closed",
    url: "/#",
  },
  {
    name: "Euston",
    hours: "8am-4pm",
    address: "Room 12, 60 Rodney Street, Liverpool L1 9AD",
    days: "Sat 9am-4pm, Sun Closed",
    url: "/#",
  },
  {
    name: "Newcastle",
    hours: "8am-4pm",
    address: "3 Mercia Walk, Wolsey Place Shopping Centre, Woking GU21 6XS",
    days: "Sat 9am-4pm, Sun Closed",
    url: "/#",
  },
  {
    name: "Bristol",
    hours: "8am-4pm",
    address:
      "Corona Test Centre ℅ Room 19, Southville Clinic, 68 Coronation Road, Southville, Bristol BS3 1AS",
    days: "Sat 9am-4pm, Sun Closed",
    url: "/#",
  },
];

export default function Locations() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Box
          mt={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
        >
          <img
            src="/images/locations/location hero bg.svg"
            alt="background"
            className={classes.background}
          />
          <Typography variant="h4" color="initial" className={classes.mainText}>
            We have 1,000s of available appointments everyday, including
            Sundays. Find your nearest clinic
          </Typography>
        </Box>
        <Box className={classes.locationsContainer}>
          <Grid container spacing={3}>
            {data.map((item, idx) => {
              return (
                <Grid key={idx} item xs={12} sm={6}>
                  <Location data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

function Location({ data }) {
  const classes = useStyles();
  const { name, hours, address, days, url } = data;
  return (
    <Box className={classes.locationWrap}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Box textAlign="center" p={2}>
            <Box>
              <img
                src="/images/locations/locationMap.png"
                alt="google map location"
                className={classes.locationImage}
              />
            </Box>
            <Link> View in Google Map</Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box pl={2} pr={2}>
            <Typography variant="h5" color="initial">
              {name}
            </Typography>
            <Typography variant="h6" color="initial">
              Hours
            </Typography>
            <Typography variant="body1" color="initial" gutterBottom>
              {hours}
            </Typography>
            <Typography variant="h6" color="initial">
              Address
            </Typography>
            <Typography variant="body1" color="initial" gutterBottom>
              {address}
            </Typography>
            <Typography variant="h6" color="initial">
              Weekend
            </Typography>
            <Typography variant="body1" color="initial" gutterBottom>
              {days}
            </Typography>
            <Button to={url} variant="contained" color="primary" size="large">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    alignSelf: "center",
    maxHeight: "400px",
    position: "absolute",
    zIndex: -1,
    // [theme.breakpoints.down("md")]: {
    //   height: "320px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: "250px",
    // },
  },
  mainText: {
    position: "absolute",
    top: "100px",
    maxWidth: "700px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      top: "50px",
    },
  },
  locationsContainer: {
    marginTop: "400px",
    [theme.breakpoints.down("md")]: {
      marginTop: "320px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "250px",
    },
  },
  locationWrap: {
    padding: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 10%)",
  },
  locationImage: {
    maxWidth: "100%",
    maxHeight: "220px",
    minHeight: "150px",
  },
}));
