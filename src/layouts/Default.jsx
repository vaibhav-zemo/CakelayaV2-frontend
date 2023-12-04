import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";

const Default = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <Announcement />
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Default;
