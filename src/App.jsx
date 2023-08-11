import React, { useState } from "react";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} sx={{ flexDirection: "column" }}>
          <Navbar
            toggleSidebar={toggleSidebar}
            sidebarVisible={sidebarVisible}
          />
          <Grid item xs={12}>
            <Sidebar visible={sidebarVisible} />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
