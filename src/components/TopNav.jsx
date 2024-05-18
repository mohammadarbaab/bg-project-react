import {
  Flex,
  Box,
  Button,
  HStack,
  Img,
  Icon,
  Text,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { HiPlusCircle } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
function TopNav() {
  const buttons = [
    {
      text: "Symbol",
    },
    {
      text: "Setup",
    },
    {
      text: "Side",
    },
    {
      icon: HiPlusCircle,
      text: "Add",
    },
  ];
  return (
    <Box
      width="100%"
      height="90px"
    //   border="1px solid #DEDEDE"
      padding="52px"
      bg="#FFF;"
      alignItems="center"
      gap="16.42"
      display="flex"
    >
      <Box
        width="403px"
        height="52px"
        borderRadius="10px"
        border="1px solid #DEDEDE"
        mt="38px"
        gap="10px"
        bg="#FFF;"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        fontSize="16px"
        padding="10px 0px 10px 10px"
      >
        {buttons.slice(0, 3).map((button, index) => (
          <Button
            key={index}
            color="#8798AD;"
            width="100px" // Adjust width as needed
            height="40px" // Adjust height as needed
            display="flex"
            border="1px solid #DEDEDE"
            alignItems="center"
            fontSize="16px"
            bg="#fff"
            justifyContent="center"
          >
            <Text fontSize="16px" fontWeight="normal">
              {button.text}
            </Text>
          </Button>
        ))}
        <Text
          display="flex"
          width="100px"
          height="50px"
          padding="14px 20.555px"
          justifyContent="center"
          alignItems="center"
          borderLeft="1px solid #DEDEDE"
          background="#FFF"
          gap="5px"
          boxShadow="-1px 0px 10px 0px rgba(0, 0, 0, 0.10)"
          borderRadius="0px 10px 10px 0px"
          fontSize="16px"
          cursor="pointer"
          color="#8798AD"
        >
          <Icon as={buttons.icon} />
          {buttons[3].text}
        </Text>
      </Box>
      <Button
        color="#FFF"
        width="150px"
        height="41px"
        display="flex"
        border="1px solid #DEDEDE"
        alignItems="center"
        padding="0px 30px 0px 35px"
        borderRadius="6px"
        fontSize="16px"
        mt="38px"
        bg="#4159B1"
        justifyContent="center"
        _hover={{
          color: "#000", // Black text color on hover
          bg: "#FFF", // White background color on hover
        }}
      >
        Add Traders
      </Button>
      <Button
      color="#FFF"
      width="244px"
      height="52px"
      display="inline-flex"
      border="1px solid #DEDEDE"
      alignItems="center"
      padding="0px 30px 0px 35px"
      borderRadius="14px"
      fontSize="16px"
      gap="5px"
      mt="38px"
      bg="#FFF"
      justifyContent="center"
    >
      <Img
        src="images/02.svg"
        borderRadius="full"
        border="1px solid #DEDEDE"
        width='44px'
        height='44px'
        boxSize="42px"
        mr="2px"
      />{" "}
      {/* Assuming 02.svg is the image */}
      <Text
        color="black"
        display="flex"
        alignItems="center"
        padding="10px 28px"
        borderRadius="14px"
        border="1px solid #DEDEDE"
        gap="10px"
      >
        My Portfolio
        <Icon as={MdKeyboardArrowDown} color="black" />
      </Text>
    </Button>
    </Box>
  );
}

export default TopNav;
