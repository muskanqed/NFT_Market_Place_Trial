import React from "react";
import { Landing } from "../Components/Home";
import { Box } from "@chakra-ui/react";
import {} from "../API/listingservice";

const Home = () => {
  return (
    <Box w={"full"} flex={1}>
      <Landing />
    </Box>
  );
};

export default Home;
