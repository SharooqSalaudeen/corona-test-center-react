import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "rgb(27, 32, 80);",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: 61,
    },
    h2: {
      fontSize: 50,
      fontWeight: 800,
    },
    h3: {
      fontSize: 40,
    },
    h4: {
      fontSize: 30,
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;
