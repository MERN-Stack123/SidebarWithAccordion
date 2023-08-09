import React, { useState } from "react";
import { Drawer, Grid } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("Home"); // Default content

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleItemClick = (content) => {
    setSelectedContent(content);
    setDrawerOpen(false); // Close the drawer after selecting an item
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "Home":
        return <Typography variant="h4">Welcome to Home</Typography>;
      case "About":
        return <Typography variant="h4">About Us</Typography>;
      case "Services":
        return <Typography variant="h4">Our Services</Typography>;
      case "Contact":
        return <Typography variant="h4">Contact Us</Typography>;
      case "Login":
        return <Typography variant="h4">Login</Typography>;
      case "Register":
        return <Typography variant="h4">Register</Typography>;
      default:
        return null;
    }
  };

  return (
    <Grid container flexDirection="column">
      <Grid item>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
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
            <Accordion>
              <AccordionSummary expandIcon={<ChevronRightRoundedIcon />}>
                <Typography>Menu</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {["Home", "About", "Services", "Contact"].map((text) => (
                    <ListItem
                      button
                      key={text}
                      onClick={() => handleItemClick(text)}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ChevronRightRoundedIcon />}>
                <Typography>Authentication</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {["Login", "Register"].map((text) => (
                    <ListItem
                      button
                      key={text}
                      onClick={() => handleItemClick(text)}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Drawer>
      </Grid>

      {/* Main content */}
      <Grid item sx={{ flex: 0, overflow: "auto", mx: "auto" }}>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
