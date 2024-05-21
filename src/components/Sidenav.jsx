import React from "react";
import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { MdOutlineSettings } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdOutlineHelpCenter } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiLivejournal } from "react-icons/si";

function SideNav() {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: SiLivejournal,
      text: "Journal",
      link: "/journal",
    },
    {
      icon: TbReportAnalytics,
      text: "Reports",
      link: "/reports",
    },
    {
      icon: SlCalender,
      text: "Calendar",
      link: "/calendar",
    },
    {
      icon: MdOutlineSettings,
      text: "Configuration",
      link: "/configuration",
    },
    {
      icon: RiAccountPinCircleFill,
      text: "Account",
      link: "/account",
    },
    {
      icon: MdOutlineHelpCenter,
      text: "Help",
      link: "/help",
    },
    {
      icon: RiLogoutBoxRLine,
      text: "Log Out",
      link: "/logout",
    },
  ];

  return (
    <Box width={{ base: "100%", lg: "258px" }} h="100vh" bg="#fff" boxShadow="2xl">
      <Stack justify="space-between" h="100%">
        <Box>
          <Center>
            <HStack spacing={1} mt="48px">
              <Image
                src="/images/logo.svg"
                alt="Your Image"
                boxSize="50px"
              />
              <Text fontSize="26.625px" fontWeight="600" textColor="rgba(0, 0, 0, 0.6)">
                TradeRyt
              </Text>
            </HStack>
          </Center>
          <Box mt="35px">
            {navLinks.slice(0, 4).map((nav) => (
              <HStack
                mx="12px"
                key={nav.text}
                py="15px"
                px="40px"
                width="100%"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                gap="18px"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#0a2351"
              >
                {nav.icon && (
                  <Icon color="rgba(249, 186, 51, 1)" width="20px" height="24px" as={nav.icon} />
                )}
                <Text fontWeight="400" fontSize="19px">
                  {nav.text}
                </Text>
              </HStack>
            ))}
          </Box>
        </Box>
        <Box mb="5px">
          {navLinks.slice(4, 7).map((nav) => (
            <HStack
              mx="12px"
              key={nav.text}
              py="15px"
              px="40px"
              width="100%"
              borderRadius="10px"
              display="flex"
              alignItems="center"
              gap="18px"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#0a2351"
            >
              {nav.icon && (
                <Icon color="rgba(249, 186, 51, 1)" as={nav.icon} width="20px" height="24px" />
              )}
              <Text fontWeight="400" fontSize="19px">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

export default SideNav;
