import { makeStyles } from "@material-ui/core";

export const tabsStyles = makeStyles((theme) => ({
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

export const tabItemStyles = makeStyles((theme) => ({
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
