import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import LandingPage from "./LandingPage";
import Registration from "./Registration";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Avenir",
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {/* <LandingPage /> */}
          <Registration />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
