import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { useGetFeaturedListings } from "../../API/listingservice";

const Landing = () => {
  let headerText = "NFT-MarketPlace makes NFTs Easy for everyone";
  let subHeaderText =
    " Discover the largest NFT market place, we provide many NFT with the best quality and various variants for you.";
  const { data: FeaturedArtWorks = [] } = useGetFeaturedListings();
  console.log(FeaturedArtWorks);
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      py={{ base: "6", lg: "20" }}
      px={{ base: 4, md: 16 }}
      align={"center"}
      bg="background_gradient_1"
      justify={"space-between"}
    >
      <Stack w={{ base: "100%", lg: "50%" }} spacing={6}>
        <Heading
          color={"gray.900"}
          fontSize={{ base: "4xl", lg: "6xl" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          {headerText}
        </Heading>
        <Text
          color={"gray.500"}
          textAlign={{ base: "center", lg: "left" }}
          fontSize={{ base: "sm", lg: "md" }}
        >
          {subHeaderText}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Landing;
