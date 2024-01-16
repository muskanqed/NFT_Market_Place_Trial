import React from "react";
import PropTypes from "prop-types";
import NavBar from "./navbar";
import Footer from "./footer";
import { VStack, Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <VStack spacing={0} align={"start"} minH={"100vh"}>
      <Box w={"full"}>
        <NavBar />
      </Box>
      <VStack spacing={0} align={"start"} w={"full"} flex={1}>
        {children}
      </VStack>

      <Box w={"full"}>
        <Footer />
      </Box>
    </VStack>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};

export default Layout;
