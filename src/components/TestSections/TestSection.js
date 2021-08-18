import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { tabsStyles, tabItemStyles } from "../../assets/styles/AppleTabs";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const data = {
  leavinguk: {
    pcrtest: {
      button: "Book PCR Test",
      caption: "PCR Fit to Fly Test",
      price: "From $149",
      descriptions: [
        "Suitable for most flights leaving the UK",
        "Accepted by all airlines",
        "Results delivered as fast as 23:59 the same day",
      ],
    },
    antigentest: {
      button: "Book Antigen Test",
      caption: "Antigen  Fit to Fly Test",
      price: "From $99",
      descriptions: [
        "Get results by 22:00 the same day",
        "Government-recognised provider",
        "Accepted for travel to destinations including Italy, the US & Germany",
      ],
    },
  },
  enteringuk: {
    pcrtest: {
      button: "Book PCR Test",
      caption: "PCR Fit to Fly Test",
      price: "From $149",
      descriptions: [
        "Suitable for most flights leaving the UK",
        "Accepted by all airlines",
        "Results delivered as fast as 23:59 the same day",
      ],
    },
    antigentest: {
      button: "Book Antigen Test",
      caption: "Antigen  Fit to Fly Test",
      price: "From $99",
      descriptions: [
        "Get results by 22:00 the same day",
        "Government-recognised provider",
        "Accepted for travel to destinations including Italy, the US & Germany",
      ],
    },
  },
};

export default function TestSection() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyle = tabsStyles();
  const tabItemStyle = tabItemStyles();
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box mb={8}>
        <Box className={classes.headerWrap}>
          <Typography variant="h3" color="initial" gutterBottom>
            Choose Your Test
          </Typography>
          <Typography variant="h6" color="initial" gutterBottom>
            We offer a range of COVID-19 Travel tests including PCR Fit to Fly,
            Antigen, Day 2 & Day 8 Tests and Test to Release.
          </Typography>
          {/* ---------Tabs Start-------------- */}
          <Box m={2} width="450px">
            <Tabs
              classes={tabsStyle}
              value={tabIndex}
              onChange={(e, index) => setTabIndex(index)}
            >
              <Tab classes={tabItemStyle} disableRipple label={"PCR Test"} />
              <Tab
                classes={tabItemStyle}
                disableRipple
                label={"Antigen Test"}
              />
            </Tabs>
          </Box>
          {/* ---------Tabs End-------------- */}
        </Box>
        {
          tabIndex === 0 ? (
            // {/* ---------Simple Bundle Start-------------- */}
            <Box p={4} className={classes.bundleWrap}>
              <Box display="flex" alignItems="center">
                <Typography variant="h4" color="initial">
                  Leaving the UK
                </Typography>
                <Box pl={2}>
                  <img
                    src="/images/Bundles/departing.svg"
                    alt="departure"
                    height="50px"
                  />
                </Box>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <ItemTestType data={data.leavinguk} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ItemTest data={data.leavinguk} />
                </Grid>
              </Grid>
            </Box>
          ) : (
            // {/* ---------Simple Bundle End-------------- */}
            // {/* ---------Simple Bundle Start-------------- */}
            <Box p={4} className={classes.bundleWrap}>
              <Box display="flex" alignItems="center">
                <Typography variant="h4" color="initial">
                  Entering the UK
                </Typography>
                <Box pl={2}>
                  <img
                    src="/images/Bundles/arriving.svg"
                    alt="ariving"
                    height="50px"
                  />
                </Box>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <ItemTest data={data.leavinguk} />
                </Grid>
              </Grid>
            </Box>
          )
          // {/* ---------Simple Bundle End-------------- */}
        }
      </Box>
    </Container>
  );
}

function ItemTest({ data }) {
  const classes = useStyles();
  var { button, caption, price, descriptions } = data.antigentest;
  return (
    <div>
      <Box className={classes.itemWrap}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Box display="flex" alignItems="center">
              <Box p={1}>
                <img
                  src="/images/Bundles/departing.svg"
                  alt="departure"
                  height="50px"
                />
              </Box>
              <Typography variant="h4" style={{ color: "rgb(65, 76, 184)" }}>
                Fit to Fly Test
              </Typography>
            </Box>
            <Box m={2} pl={2}>
              {descriptions.map((item, idx) => {
                return (
                  <Typography
                    key={idx}
                    variant="body1"
                    color="initial"
                    style={{ paddingTop: "10px" }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Box>
            <Box
              pt={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                className={classes.button}
                style={{
                  backgroundColor: "rgb(65, 76, 184)",
                  color: "white",
                }}
              >
                {button}
              </Button>
              <Box pl={3} display="flex" flexDirection="column">
                <Typography variant="body1" color="initial">
                  {caption}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: "rgb(65, 76, 184)" }}
                >
                  {price}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function ItemTestType({ data }) {
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();
  const tabsStyle = tabsStyles();
  const tabItemStyle = tabItemStyles();

  const { pcrtest, antigentest } = data;
  var button, caption, price, descriptions;

  if (tabIndex === 0) {
    ({ button, caption, price, descriptions } = pcrtest);
  } else if (tabIndex === 1) {
    ({ button, caption, price, descriptions } = antigentest);
  }
  return (
    <div>
      <Box className={classes.itemWrap}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center">
              <Box p={1}>
                <img
                  src="/images/Bundles/departing.svg"
                  alt="departure"
                  height="50px"
                />
              </Box>
              <Typography variant="h4" style={{ color: "rgb(100, 154, 171)" }}>
                Fit to Fly Test
              </Typography>
            </Box>
            <Box m={2} pl={2}>
              {descriptions.map((item, idx) => {
                return (
                  <Typography
                    key={idx}
                    variant="body1"
                    color="initial"
                    style={{ paddingTop: "10px" }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              m={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h6" color="initial">
                Test Type
              </Typography>
              {/* ---------Tabs Start-------------- */}

              <Tabs
                classes={tabsStyle}
                value={tabIndex}
                onChange={(e, index) => setTabIndex(index)}
              >
                <Tab classes={tabItemStyle} disableRipple label={"PCR Test"} />
                <Tab
                  classes={tabItemStyle}
                  disableRipple
                  label={"Antigen Test"}
                />
              </Tabs>
              {/* ---------Tabs End-------------- */}
            </Box>
            <Box
              pt={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                className={classes.button}
                style={{
                  backgroundColor: "rgb(100, 154, 171)",
                  color: "white",
                }}
              >
                {button}
              </Button>
              <Box pl={3} display="flex" flexDirection="column">
                <Typography variant="body1" color="initial">
                  {caption}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "rgb(100, 154, 171)",
                  }}
                >
                  {price}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  headerWrap: {
    padding: "60px 100px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 20px",
    },
  },
  bundleWrap: {
    border: "1px solid #649aab",
    borderRadius: "20px",
    backgroundColor: "#e9f3f5",
    height: "100%",
  },
  itemWrap: {
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: "20px",
    padding: "30px",
    boxShadow: "6px 0 24px 0 rgb(0 0 0 / 10%)",
  },
  button: {
    padding: "16px 30px",
  },
}));

const tabsStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:
      theme.palette.type === "light" ? "#eee" : theme.palette.divider,
    borderRadius: 10,
    minHeight: 44,
    // width: "fit-content",
    width: "100%",
  },
  flexContainer: {
    // display: "inline-flex",
    display: "flex",
    position: "relative",
    zIndex: 1,
  },
  scroller: {
    [theme.breakpoints.up("md")]: {
      padding: "0 8px",
    },
  },
  indicator: {
    top: 3,
    bottom: 3,
    right: 3,
    height: "auto",
    background: "none",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 4,
      right: 4,
      bottom: 0,
      borderRadius: 8,
      backgroundColor:
        theme.palette.type === "light" ? "#fff" : theme.palette.action.selected,
      boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
    },
  },
}));

const tabItemStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      opacity: 1,
    },
    minHeight: 44,
    // minWidth: 96,
    minWidth: "50%",
    [theme.breakpoints.up("md")]: {
      // minWidth: 130,
      minWidth: "50%",
    },
  },
  wrapper: {
    // zIndex: 2,
    // marginTop: spacing(0.5),
    color: theme.palette.text.primary,
    textTransform: "initial",
  },
}));
