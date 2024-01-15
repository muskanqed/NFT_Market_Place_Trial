import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";
import {
  Flex,
  useColorModeValue,
  Image,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "../../Assests/logo.svg";
import { navItems } from "../../Constants/navitems";

const NavBar = () => {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "grey.800")}
        minH={"60px"}
        color={useColorModeValue("grey.600", "white")}
        border={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("grey.200", "grey.900")}
        align={"Center"}
        px={{ base: 6 }}
        py={{ base: 4 }}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
          <Flex align={"center"}>
            <NavLink to={"/"}>
              <Image src={logo} />
            </NavLink>
          </Flex>

          <Flex display={{ base: "none", lg: "flex" }} ml={16}>
            <DesktopNav />
          </Flex>

          <Flex
            flex={{ base: 1 }}
            justify={{ base: "flex-end" }}
            direction={"row"}
          >
            <Button
              fontSize={"md"}
              color={"white"}
              px={8}
              bg={"button_gradient"}
              _hover={{ bg: "button_gradient_light" }}
              _active={{ bg: "button_gradient_light" }}
            >
              Connect Wallet
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const DesktopNav = () => {
  const location = useLocation();

  return (
    <Stack direction={"row"} spacing={10}>
      {navItems.map(({ item, link }) => (
        <NavLink to={link}>
          <Text
            padding={2}
            fontSize={"medium"}
            fontWeight={400}
            color={location.pathname === link ? "brand_pink.900" : "gray.800"}
            _hover={
              location.pathname !== link && {
                color: "gray.600",
                textDecoration: "none",
                fontsize: "10",
              }
            }
          >
            {item}
          </Text>
        </NavLink>
      ))}
    </Stack>
  );
};

export default NavBar;
