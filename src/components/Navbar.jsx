import React from "react";
import { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import { navCustomStyle } from "../customstyle/navCustomStyle";
import Logo from "../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/system";

const home = "Home";
const about = "About";
const contactus = "Contact Us";

const Navbar = ({ toggleSidebar, sidebarVisible }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const navigate = useNavigate();
  const [handleNav, setHandleNav] = useState(null);
  // const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setHandleNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setHandleNav(null);
    //setAnchorElNav(null);
  };
  const handleNavHome = () => {
    navigate("/telugutechassist/home");
  };
  const handleNavAbout = () => {
    navigate("/telugutechassist/about");
  };
  const handleNavContactUs = () => {
    navigate("/telugutechassist/contactus");
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#FFFFFF", elevation: 0.1 }}>
      <Container maxWidth="full">
        <ThemeProvider theme={theme}>
          <Toolbar disableGutters>
            <Typography noWrap href="/" sx={navCustomStyle.sxTypoBrandOne}>
              <Box component="img" height={"full"} alt="brand_img" src={Logo} />
            </Typography>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Typography href="/" sx={navCustomStyle.sxTypoBrandTwo}>
              <Box
                component="img"
                height={"full"}
                alt="Your logo."
                src={Logo}
              />
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Button onClick={handleNavHome} sx={navCustomStyle.sxHome}>
                <NavLink
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textTransform: "capitalize",
                  }}
                >
                  {home}
                </NavLink>
              </Button>
              <Button onClick={handleNavAbout} sx={navCustomStyle.sxAbout}>
                <NavLink
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textTransform: "capitalize",
                  }}
                >
                  {about}
                </NavLink>
              </Button>
              <Button
                onClick={handleNavContactUs}
                sx={navCustomStyle.sxContact}
              >
                <NavLink
                  to="/contactus"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textTransform: "capitalize",
                  }}
                >
                  {contactus}
                </NavLink>
              </Button>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                {/* menu icon */}
                <IconButton
                  size="large"
                  aria-label="toggle sidebar"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  onClick={toggleSidebar}
                  color="inherit"
                >
                  <MenuIcon sx={navCustomStyle.sxMenuIcon} />
                </IconButton>
                {/* menu */}
                <Menu
                  id="menu-appbar"
                  anchorEl={handleNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(handleNav)}
                  onClose={handleCloseNavMenu}
                  sx={navCustomStyle.sxMenu}
                >
                  <MenuItem>
                    <Stack>
                      <Typography
                        textAlign="left"
                        onClick={handleNavHome}
                        py={1}
                      >
                        <NavLink
                          to="/home"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            textTransform: "capitalize",
                          }}
                        >
                          {home}
                        </NavLink>
                      </Typography>

                      <Typography
                        textAlign="left"
                        onClick={handleNavAbout}
                        py={1}
                      >
                        <NavLink
                          to="/about"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            textTransform: "capitalize",
                          }}
                        >
                          {about}
                        </NavLink>
                      </Typography>
                    </Stack>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </ThemeProvider>
      </Container>
    </AppBar>
  );
};

export default Navbar;
