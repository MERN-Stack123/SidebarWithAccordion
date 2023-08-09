import React, { useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Grid>
      <Grid container sx={{ flexDirection: "column" }}>
        <Navbar />
        <Grid item>
          <Sidebar />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
