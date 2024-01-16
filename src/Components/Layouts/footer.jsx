import React from "react";
import {
  Box,
  Stack,
  useColorModeValue,
  SimpleGrid,
  Text,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGooglePlay,
  FaYoutube,
  FaLinkedin,
  FaApple,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../../Assests/logo.svg";
import { footerNavItems } from "../../Constants/footernavitems";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"sm"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("brand_pink.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      pt={{ base: 10, md: 16 }}
      pb={{ base: 10, md: 8 }}
      px={{ base: 4, md: 16 }}
    >
      <Stack color={"black"} flexWrap={"wrap"}>
        <Image src={logo} w={"36"} mb={8} />
        <Stack
          direction={{ base: "row" }}
          justify={{ base: "center", lg: "space-between" }}
          flexWrap={"wrap"}
        >
          <Box display={{ base: "none", lg: "initial" }}>
            <DesktopFooterItems />
          </Box>

          <Stack
            align={{ base: "center", lg: "flex-start" }}
            justify={{ base: "center", lg: "start" }}
          >
            <ListHeader>Miko app is available on:</ListHeader>
            <Stack direction={{ base: "row" }}>
              <Link
                href="https://apps.apple.com/my/app/miko-3-parent/id1588895826"
                target={"_blank"}
              >
                <Button
                  variant="outline"
                  borderWidth={"2px"}
                  borderColor={"black"}
                  leftIcon={<FaApple size="21px" />}
                  color={"black"}
                  p={"6"}
                  borderRadius={"xl"}
                  fontWeight={"normal"}
                  fontSize={"sm"}
                  _hover={{
                    bg: "gray.900",
                    color: "white",
                  }}
                >
                  App Store
                </Button>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.miko3.app"
                target={"_blank"}
              >
                <Button
                  variant="outline"
                  borderWidth={"2px"}
                  borderColor={"black"}
                  leftIcon={<FaGooglePlay size="21px" />}
                  color={"black"}
                  p={"6"}
                  borderRadius={"xl"}
                  fontWeight={"normal"}
                  fontSize={"sm"}
                  _hover={{
                    bg: "gray.900",
                    color: "white",
                  }}
                >
                  Play Store
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider
        borderColor={"black"}
        my={"14"}
        display={{ base: "none", lg: "block" }}
      />
    </Box>
  );
};

const DesktopFooterItems = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
      {footerNavItems.map(({ headerText = "", children = [] }) => (
        <Stack align={"flex-start"} key={headerText}>
          <ListHeader>{headerText}</ListHeader>
          {children.map(({ item = "", link = "#" }) => (
            <Link
              key={item}
              href={link}
              target={"_blank"}
              _hover={{ color: "red.600", textDecor: "underline" }}
              fontSize={"sm"}
            >
              {item}
            </Link>
          ))}
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default Footer;
