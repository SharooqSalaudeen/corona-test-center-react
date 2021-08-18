import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box component={RouterLink} to="/" mt={10}>
        <img
          src="/logo.svg"
          alt="logo"
          width="160px"
          className={classes.logo}
        />
      </Box>
      <Divider light />

      <Box m={2} pt={2} pb={6}>
        <Grid container spacing={1}>
          {footers.map((footer) => (
            <Grid item md={2} xs={6} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>

              <ul className={classes.footerList}>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}

          <Grid item md={4} xs={12}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textPrimary" gutterBottom>
              Corona Test Centre is a leading government recognised provider of
              COVID-19 testing. We work with UKAS accredited laboratories to
              offer fast, reliable and convenient testing throughout the UK.
            </Typography>
            <br />
            <Typography variant="body2" color="textPrimary" gutterBottom>
              Want COVID news, discounts, travel alerts and more? Sign up to our
              newsletter below.
            </Typography>
            <Box mt={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Your mail address"
              />
            </Box>
            <Box mt={2}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://ampcome.com/">
              Apmcome Demo
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  footerList: {
    listStyle: "none",
    padding: "0",
  },
  logo: {
    margin: "20px 0",
  },
}));
