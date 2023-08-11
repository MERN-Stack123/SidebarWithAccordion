import React, { useState } from "react";
import { Drawer, Grid, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CustomAccordion from "./Accordion";
import { authenticationItems, menuItems, contentData } from "./Data";
import Navbar from "./Navbar";

const Sidebar = ({ visible}) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("Home"); // Default content

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleItemClick = (content) => {
    setSelectedContent(content);
    setDrawerOpen(false); // Close the drawer after selecting an item
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container flexDirection="column">
        <Navbar />
        <Grid
          item
          sx={{
            flexGrow: 0,
            display: { xs: visible ? "block" : "none", md: "flex" },
          }}
        >
          <Drawer
            anchor="left"
            // open={drawerOpen}
            onClose={toggleDrawer}
            open={visible}
            variant="permanent"
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 270,
                height: "100vh",
                marginTop: 9,
                boxSizing: "border-box",
              },
            }}
          >
            <Grid sx={{ padding: "10px" }}>
              <CustomAccordion title="Menu">
                <List>
                  {menuItems.map((text) => (
                    <ListItem
                      button
                      key={text}
                      onClick={() => handleItemClick(text)}
                    >
                      {/* <ListItemText primary={text} /> */}
                      <ListItemText>
                        <Typography variant="body1">{text}</Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </CustomAccordion>
              <CustomAccordion title="Authentication">
                <List>
                  {authenticationItems.map((text) => (
                    <ListItem
                      button
                      key={text}
                      onClick={() => handleItemClick(text)}
                    >
                      {/* <ListItemText primary={text} /> */}
                      <ListItemText>
                        <Typography variant="body1">{text}</Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </CustomAccordion>
            </Grid>
          </Drawer>
        </Grid>

        {/* Main content */}
        <Grid item sx={{ flex: 0, overflow: "auto", mx: "auto" }}>
          {/* {renderContent()} */}
          {contentData[selectedContent] || null}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Sidebar;
