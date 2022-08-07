import React from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Screens from "./components/Screens";
const theme = createTheme({
  typography: {
    fontSize: 20,
    fontFamily: "Helvetica Neue",
  },
});
const App = () => {
 // all screen imported
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Screens />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
