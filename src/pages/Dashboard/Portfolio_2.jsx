import React from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  Icon,
  VStack,
  Button,
  Divider,
  HStack,
} from "@chakra-ui/react";
import {
  circleLogo,
  circleLogo_2,
  greenCircle,
  pinkCircle,
  saveLogo,
} from "../../asesst/svsg";

function Portfolio_2() {
  return (
    <Box
      w="357px"
      h="430px"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      borderRadius="14px"
      bg="#FFF"
      rounded="14px"
      overflow="hidden"
      p="16px" // Adding padding to ensure proper spacing
    >
      <Box
        width="325px"
        height="102px"
        bg="#FFF"
        borderRadius="14px"
        border="1px solid rgba(222, 222, 222, 0.70);"
        alignSelf="stretch"
        flex="1 0 0;"
      >
        <HStack display="flex" justifyContent="space-between">
          <Text
            color="#2E384D"
            fontFamily="Ubuntu"
            fontSize="27.544px"
            fontWeight="600"
            lineHeight="normal;"
            paddingLeft="13.07"
            paddingTop="4.96px"
          >
            11
          </Text>
          <Text
            color="var(--Primary-Text, #2E384D);"
            textAlign="right"
            fontFamily="Ubuntu"
            fontSize="18px"
            fontStyle="normal;"
            fontWeight="600"
            paddingTop="12.66px"
            paddingRight="10.14px"
            lineHeight="24px"
          >
            Journaling Streak
          </Text>
        </HStack>
        <Flex
          width="302px"
          height="10px"
          flexShrink="0"
          borderRadius="6px"
          mt="16.06px"
          position="relative" // Set the position of the parent Flex container
          ml="13.7px"
        >
          <Box
            width="110.77px"
            height="10px"
            flexShrink="0"
            borderRadius="6px"
            bg="#4159B1"
            position="relative" // Set the position of the blue box
            zIndex="1" // Set a higher z-index to ensure it's above the white box
          ></Box>
          <Box
            flex="1 0 0"
            height="10px"
            borderRadius="14px"
            border="1px solid rgba(222, 222, 222, 0.70)"
            bg="#FFF"
            alignSelf="stretch"
            position="relative" // Set the position of the white box
            zIndex="0" // Ensure it's below the blue box
          ></Box>
        </Flex>
        <HStack display="flex" justifyContent="space-between" mt="2px">
          <Text
            color="var(--Secondary-Text, #8798AD);"
            fontFamily="Ubuntu"
            fontSize="14px"
            fontWeight="400"
            lineHeight="normal;"
            paddingLeft="13.07"
            paddingTop="4.96px"
          >
            November 2023
          </Text>
          <Text
            color="var(--Secondary-Text, #8798AD);"
            fontFamily="Ubuntu"
            fontSize="14px"
            fontWeight="400"
            lineHeight="normal;"
            paddingRight="9.81"
            paddingTop="4.96px"
          >
            30
          </Text>
        </HStack>
      </Box>
      <Box
        width="325px"
        height="164px"
        display="flex"
        bg="#FFF"
        borderRadius="14px"
        border="1px solid rgba(222, 222, 222, 0.70);"
        alignSelf="stretch"
        flex="1 0 0;"
        justifyContent="space-between"
        mt="8px"
      >
        <Box
          paddingTop="22.11"
          paddingLeft="22.03"
          paddingBottom="23.94"
          display="flex"
        >
          {circleLogo}
        </Box>
        <Box flexDirection="column" display="flex" alignItems="end" 
            paddingRight="11px" paddingTop="10.25px">
          <Box
            display="inline-flex"
            padding="8px"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            borderRadius="100px"
            border="1px solid #EEE;"
          >
            {saveLogo}
          </Box>
          <Text
            color="var(--Primary-Text, #2E384D);"
            textAlign="right;"
            fontSize="18px;"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            paddingRight="10.04"
            paddingTop="5.43px"
          >
            Win Percentage
          </Text>
          <Box display="flex" justifyItems="center">
            <Text
              color="var(--Primary-Text, #2E384D);"
              textAlign="right;"
              fontSize="14px;"
              fontStyle="normal"
              fontWeight="400"
              display="flex"
              lineHeight="24px"
              gap="4.28px"
              paddingRight="10.04"
              paddingTop="5.73px"
            >
              <Box paddingTop="6.24px">{greenCircle}</Box>
              <b>56</b>Winning Trades
            </Text>
          </Box>
          <Text
            color="var(--Primary-Text, #2E384D);"
            textAlign="right;"
            fontSize="14px;"
            fontStyle="normal"
            fontWeight="400"
            display="flex"
            lineHeight="24px"
            gap="4.28px"
            paddingRight="10.04"
            paddingTop="5.73px"
          >
            <Box paddingTop="6.24px">{pinkCircle}</Box>
            <b>56</b>Losing Trades
          </Text>
        </Box>
      </Box>
      <Box
        width="325px"
        height="109px"
        bg="#FFF"
        borderRadius="14px"
        border="1px solid rgba(222, 222, 222, 0.70);"
        alignSelf="stretch"
        flex="1 0 0;"
        mt="8px"
      >
        <HStack display="flex" justifyContent="space-between">
          <Text
            color="#2E384D"
            fontFamily="Ubuntu"
            fontSize="27.544px"
            fontWeight="600"
            lineHeight="normal;"
            paddingLeft="13.07"
            paddingTop="4.96px"
          >
            2.4
          </Text>
          <Text
            color="var(--Primary-Text, #2E384D);"
            textAlign="right"
            fontFamily="Ubuntu"
            fontSize="18px"
            fontStyle="normal;"
            fontWeight="600"
            mt="12.66px"
            paddingRight="10.14px"
            lineHeight="24px"
          >
            Avg. Win/Loss per Trade
          </Text>
        </HStack>
        <Flex
          width="302px"
          height="10px"
          flexShrink="0"
          borderRadius="6px"
          mt="16.06px"
          position="relative" // Set the position of the parent Flex container
          ml="13.7px"
        >
          <Box
            width="110.77px"
            height="10px"
            flexShrink="0"
            borderRadius="6px"
            bg="#F96E8F"
            position="relative" // Set the position of the blue box
            zIndex="1" // Set a higher z-index to ensure it's above the white box
          ></Box>
          <Box
            flex="1 0 0"
            height="10px"
            borderRadius="14px"
            border="1px solid rgba(222, 222, 222, 0.70)"
            bg="#41B18F;"
            alignSelf="stretch"
            position="relative" // Set the position of the white box
            zIndex="0" // Ensure it's below the blue box
          ></Box>
        </Flex>
        <HStack display="flex" justifyContent="space-between" mt="2px">
          <Text
            color="var(--Secondary-Text, #8798AD);"
            fontFamily="Ubuntu"
            fontSize="14px"
            fontWeight="400"
            lineHeight="normal;"
            paddingLeft="13.07"
            paddingTop="4.96px"
          >
          ₹ 5132
          </Text>
          <Text
            color="var(--Secondary-Text, #8798AD);"
            fontFamily="Ubuntu"
            fontSize="14px"
            fontWeight="400"
            lineHeight="normal;"
            paddingRight="9.81"
            paddingTop="4.96px"
          >
          ₹ 3482
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default Portfolio_2;
