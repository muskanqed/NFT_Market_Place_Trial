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
  chakra,
  VisuallyHidden,
  StackDivider,
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
import {
  footerNavItems,
  footerBottomContent,
} from "../../Constants/footernavitems";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"sm"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={"full"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={"_blank"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      p={"1.5"}
      _hover={{
        bg: "button_gradient",
        color: "white",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
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
      <Stack
        direction={{ base: "column", lg: "row" }}
        color={"black"}
        justify={{ base: "space-between" }}
        spacing={{ base: "10" }}
        rowGap={{ base: "4" }}
      >
        <Stack
          direction={"row"}
          fontSize={"xs"}
          spacing={{ base: "2", lg: "4" }}
          order={{ base: 2, lg: 1 }}
          justify={{ base: "center", lg: "start" }}
          flexWrap={"wrap"}
          whiteSpace={"nowrap"}
          rowGap={{ base: "2" }}
          align={"center"}
        >
          <Text pr={{ base: "2", lg: "6" }} fontSize={15} fontWeight={400}>
            @All Rights Reserved
          </Text>
          <Stack
            direction={"row"}
            fontSize={"xs"}
            spacing={{ base: "2", lg: "4" }}
            justify={{ base: "center", lg: "start" }}
            flexWrap={"wrap"}
            whiteSpace={"nowrap"}
            rowGap={{ base: "2" }}
            divider={<StackDivider borderColor={"black"} />}
          >
            {footerBottomContent.map(({ item = "", link = "#" }) => (
              <Link
                key={item}
                href={link}
                target={"_blank"}
                textDecor={"underline"}
                _hover={{
                  textDecoration: "none",
                  color: "red.700",
                  borderColor: "transparent",
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={{ base: "6", lg: "2" }}
          order={{ base: 1, lg: 2 }}
          justify={{ base: "center", lg: "start" }}
        >
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/Miko-108227973861366/"}
            children={<FaFacebook size="21px" />}
          />
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/mikorobotusa"}
            children={<FaTwitter size="21px" />}
          />
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/mikorobotusa/"}
            children={<FaInstagram size="21px" />}
          />
          <SocialButton
            label={"Youtube"}
            href={"https://www.youtube.com/c/MikoRobot"}
            children={<FaYoutube size="21px" />}
          />
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/company/mikorobot/mycompany/"}
            children={<FaLinkedin size="21px" />}
          />
        </Stack>
      </Stack>
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
