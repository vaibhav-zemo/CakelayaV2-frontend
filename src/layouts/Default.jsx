import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Default = () => {
  return (
    <Box>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Default;
