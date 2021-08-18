import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/styles/MaterialTheme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Locations from "./pages/Locations";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
