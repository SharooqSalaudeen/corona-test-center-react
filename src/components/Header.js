import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link as RouterLink } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const menu = [
  { name: "Home Tests", url: "/" },
  { name: "Register Kit", url: "/register" },
  { name: "Test Centers", url: "/locations" },
  { name: "Travel Destinations", url: "/register" },
  { name: "Corporate", url: "/" },
];

export default function Header() {
  const classes = useStyles();
  const showMenu = useMediaQuery("(min-width:1070px)");

  const [drawerMenuOpen, setDrawerMenuOpen] = React.useState(false);
  const [drawerCartOpen, setDrawerCartOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setDrawerMenuOpen(!drawerMenuOpen);
  };

  const handleCartToggle = () => {
    setDrawerCartOpen(!drawerCartOpen);
  };
  // console.log(drawerOpen);
  return (
    <Toolbar className={classes.toolbar}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          m={2}
        >
          <Box component={RouterLink} to="/">
            <img
              src="/logo.svg"
              alt="Corona TEst Centre"
              className={classes.logo}
            />
          </Box>
          {showMenu ? (
            <>
              {menu.map((item, idx) => {
                const { name, url } = item;
                return (
                  <Button
                    key={idx}
                    component={RouterLink}
                    to={url}
                    size="large"
                    className={classes.links}
                  >
                    {name}
                  </Button>
                );
              })}
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.getTestedbtn}
              >
                Get Tested
              </Button>
              <Link className={classes.phone}>
                <span style={{ display: "block" }}>Available 24/7</span>
                0123456789
              </Link>
            </>
          ) : null}
          <Box display="flex">
            <>
              <IconButton
                aria-label="open cart"
                color="primary"
                onClick={() => handleCartToggle()}
              >
                <ShoppingCartIcon fontSize="large" />
              </IconButton>
              <CartDrawer
                handleCartToggle={handleCartToggle}
                drawerCartOpen={drawerCartOpen}
              />
            </>
            {!showMenu ? (
              <>
                <IconButton
                  aria-label="open menu"
                  color="primary"
                  onClick={() => handleMenuToggle()}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <MenuDrawer
                  handleMenuToggle={handleMenuToggle}
                  drawerMenuOpen={drawerMenuOpen}
                />
              </>
            ) : null}
          </Box>
        </Box>
      </Container>
    </Toolbar>
  );
}

function MenuDrawer({ handleMenuToggle, drawerMenuOpen }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      anchor="top"
      open={drawerMenuOpen}
      onClose={() => handleMenuToggle()}
    >
      <div role="presentation" className={classes.menuDrawer}>
        {/* <IconButton
          aria-label="close menu"
          onClick={() => handleMenuToggle()}
          className={classes.closeMenuButton}
        >
          <CloseIcon fontSize="large" />
        </IconButton> */}
        <img
          src="/logo.svg"
          alt="Corona TEst Centre"
          className={classes.logo}
        />
        <List>
          {menu.map((item, idx) => {
            const { name, url } = item;
            return (
              <Box key={idx} borderTop="1px solid rgb(18, 22, 56)">
                <ListItem
                  component={RouterLink}
                  to={url}
                  className={classes.menuDrawerLinks}
                >
                  {name}
                  <ListItemText primary={name} />
                </ListItem>
              </Box>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}

function CartDrawer({ handleCartToggle, drawerCartOpen }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={drawerCartOpen}
      onClose={() => handleCartToggle()}
    >
      <div role="presentation" className={classes.cartContainer}>
        <Box
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4" color="initial">
            Shopping Cart
          </Typography>
          <IconButton
            aria-label="close menu"
            onClick={() => handleCartToggle()}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box p={2} mt={5}>
          <Divider light />
          <Box p={2} display="flex" justifyContent="space-between">
            <Typography variant="body1" color="initial">
              Subtotal
            </Typography>
            <Typography variant="body1" color="initial">
              $0
            </Typography>
          </Box>
          <Typography variant="body1" color="initial" gutterBottom>
            You're saving £30.00
          </Typography>
          <Typography variant="body1" color="initial" gutterBottom>
            Shipping & taxes calculated at checkout
          </Typography>
          <Button variant="outlined" color="default">
            Check Out →
          </Button>
        </Box>
      </div>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    position: "sticky",
    top: "0",
    left: "0",
    right: "0",
    backgroundColor: "#ffffff",
    zIndex: "100",
  },
  logo: {
    minWidth: "160px",
    maxWidth: "200px",
    height: "auto",
  },
  links: {
    fontWeight: 600,
    lineHeight: 1.2,
    textAlign: "left",
    margin: "0 0 0 10px",
    padding: "8px 4px",
    width: "auto",
    textTransform: "capitalize",
  },
  getTestedbtn: {
    minWidth: "120px",
    margin: "10px",
    whiteSpace: "nowrap",
  },
  phone: {
    color: "#000000",
    textDecoration: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  menuDrawer: {
    // marginTop: "100px",
    margin: "20px 20px 0 20px",
  },
  menuDrawerLinks: {
    color: "black",
    textDecoration: "none",
  },

  cartContainer: {
    width: "360px",
  },
}));
