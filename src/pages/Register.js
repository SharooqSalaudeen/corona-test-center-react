import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Footer from "../components/Footer";

export default function Register() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Box mt={6} display="flex" justifyContent="center">
          <Box
            width="auto"
            display="flex"
            flexDirection="column"
            textAlign="center"
            className={classes.contentWrap}
          >
            <Typography variant="h4" color="initial" gutterBottom>
              Welcome !
            </Typography>
            <Typography variant="h6" color="initial" gutterBottom>
              What do you want to do ?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              Register a home test kit
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              Upload antigen cartridge photo
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
            >
              Return to Home Testing Store
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  contentWrap: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  button: {
    padding: "16px 50px",
    margin: "10px 0",
    borderRadius: "10px",
    textTransform: "initial",
  },
}));
