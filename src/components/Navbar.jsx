import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <Grid container justifyContent={"center"}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Your App Name</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
