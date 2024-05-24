import React from "react";
import {
  Box,
  Button,
  HStack,
  Icon,
  Text,
  Img,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function TopNav({ onOpen }) {
  const buttons = [
    { text: "Symbol" },
    { text: "Setup" },
    { text: "Side" },
    { text: "Add" },
  ];

  return (
    <Box
      width="100%"
      height="90px"
      padding="16px"
      ml="18px"
      alignItems="center"
      gap="16px"
      display="flex"
      justifyContent="right"
      px="4"
    >
      <HStack
        width={{ base: "auto", lg: "403px" }}
        height="52px"
        borderRadius="10px"
        border="1px solid #DEDEDE"
        gap="10px"
        bg="#FFF"
        alignItems="center"
        fontSize="16px"
        padding="10px"

        justifyContent={{ base: "space-between", lg: "space-around" }}
      >
        {/* <Icon as={FaBars} onClick={onOpen} display={{ base: "block", lg: "none" }} /> */}
        {buttons.slice(0, 3).map((button, index) => (
          <Button
            key={index}
            color="#8798AD"
            height="40px"
            display="flex"
            border="1px solid #DEDEDE"
            alignItems="center"
            fontSize="16px"
            bg="#fff"
            justifyContent="center"
            flexGrow={1}
            _hover={{ bg: "#F3F3F7" }}
          >
            <Text fontSize="16px" fontWeight="normal">
              {button.text}
            </Text>
          </Button>
        ))}
        <Button
          color="#8798AD"
          height="40px"
          display="flex"
          border="1px solid #DEDEDE"
          alignItems="center"
          fontSize="16px"
          bg="#fff"
          justifyContent="center"
          flexGrow={1}
          _hover={{ bg: "#F3F3F7" }}
        >
          <Text fontSize="16px" fontWeight="normal">
            {buttons[3].text}
          </Text>
        </Button>
      </HStack>
      <HStack spacing={4}>
        <Button
          color="#FFF"
          width="150px"
          height="41px"
          display="flex"
          border="1px solid #DEDEDE"
          alignItems="center"
          padding="0px 30px"
          borderRadius="6px"
          fontSize="16px"
          bg="#4159B1"
          justifyContent="center"
          _hover={{
            color: "#000",
            bg: "#FFF",
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
          padding="0px 30px"
          borderRadius="14px"
          fontSize="16px"
          gap="5px"
          bg="#FFF"
          justifyContent="center"
        >
          <Img
            src="/images/02.svg"
            borderRadius="full"
            border="1px solid #DEDEDE"
            width="44px"
            height="44px"
            boxSize="42px"
            mr="2px"
          />
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
      </HStack>
    </Box>
  );
}

export default TopNav;