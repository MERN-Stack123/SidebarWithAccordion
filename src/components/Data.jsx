import { Typography } from "@mui/material";

const contentData = {
  Home: <Typography variant="h4">Welcome to Home</Typography>,
  About: <Typography variant="h4">About Us</Typography>,
  Services: <Typography variant="h4">Our Services</Typography>,
  Contact: <Typography variant="h4">Contact Us</Typography>,
  Login: <Typography variant="h4">Login</Typography>,
  Register: <Typography variant="h4">Register</Typography>,
  // Add more content as needed
};

const menuItems = ["Home", "About", "Services", "Contact"];
const authenticationItems = ["Login", "Register"];

export { menuItems, authenticationItems, contentData };
