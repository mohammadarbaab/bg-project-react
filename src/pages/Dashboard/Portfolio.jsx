import React from "react";
import {
  Box,
  Text,
  Stack,
  Icon,
  VStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { upArrow, dashLogo } from "../../asesst/svsg";
import Graph from "./graph/Chart";

function Portfolio() {
  return (
    <Box
      w="717px"
      h="430px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box
        w="717px"
        h="430px"
        bg="white"
        rounded="14px"
        shadow="md"
        p="16px" // Adding padding to ensure proper spacing
      >
        <Text
          color="slate.700"
          fontSize="xl"
          fontWeight="bold"
          fontFamily="Ubuntu"
        >
          Overview
        </Text>

        <Box // Adding margin-top to create space between the text and the box
          w="685px"
          h="362px"
          borderRadius="14px"
          textColor="black"
          border="1px solid rgba(222, 222, 222, 0.70);"
          bg="#FFF"
          gap="8px"
        >
          <Stack
            direction={["column", "row"]}
            justifyContent="space-between"
            padding="16px 20.16px 11.92px 19.84px"
          >
            <Box
              w="294px"
              h="41px"
              display="flex"
              alignItems="center"
              gap="9px"
            >
              <Box
                color="black"
                fontSize="14px"
                fontWeight="bold"
                padding="8px"
                fontFamily="Ubuntu"
              >
                {dashLogo}
              </Box>
              <VStack
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Text
                  color="black"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="24px"
                  fontFamily="Ubuntu"
                >
                  Net Daily P&L
                </Text>
                <Box display="flex" alignItems="center" marginTop="-9px">
                  {upArrow}
                  <Text
                    color="black"
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="normal"
                    opacity="0.6"
                    fontFamily="Ubuntu"
                  >
                    15 % compared with last day
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box
              w="243px"
              h="41px"
              bg="gray"
              display="inline-flex"
              borderRadius="14px"
              border="1px solid #DEDEDE"
            >
              <Button
                display="flex"
                width="81px"
                padding="10px 16px 12px 16px;"
                justifyContent="center"
                alignItems="center"
                borderRight="1px solid #DEDEDE;"
                gap="10px"
              >
                <Text
                  fontSize="14px"
                  fontStyle="normal"
                  textColor="white"
                  fontWeight="600"
                  lineHeight="normal"
                  fontFamily="Ubuntu"
                >
                  Daily
                </Text>
              </Button>
              <Button
                display="flex"
                width="81px"
                padding="10px 16px 12px 16px;"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                borderRight="1px solid #DEDEDE;"
              >
                <Text
                  fontSize="14px"
                  fontStyle="normal"
                  textColor="white"
                  fontWeight="600"
                  lineHeight="normal"
                  fontFamily="Ubuntu"
                >
                  Weekly
                </Text>
              </Button>
              <Button
                display="flex"
                width="81px"
                padding="10px 16px 12px 16px;"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Text
                  fontSize="14px"
                  fontStyle="normal"
                  textColor="white"
                  fontWeight="600"
                  lineHeight="normal"
                  fontFamily="Ubuntu"
                >
                  Monthly
                </Text>
              </Button>
            </Box>
          </Stack>
          <Box>
            <Divider
              orientation="horizontal"
              mb="-8px"
              width="645px"
              bg="#2E384D;"
              opacity="0.2;"
              mx="auto"
              h="1px"
              color="black"
            />
          </Box>
          <Stack
            direction={["column", "row"]}
            justifyContent="space-between"
            padding="16px 20.16px 16px 19.84px"
          >
            <Box
              w="294px"
              h="41px"
              display="flex"
              alignItems="center"
              gap="9px"
            >
              <VStack
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Text
                  color="black"
                  fontSize="28px"
                  fontWeight="600"
                  lineHeight="normal"
                  fontFamily="Ubuntu"
                  textColor=" var(--Primary-Text, #2E384D);"
                >
                  ₹ 28,891.138
                </Text>
                <Box alignItems="center" marginTop="-9px">
                  <Text
                    color="var(--Primary-Text, #2E384D)"
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="normal"
                    opacity="0.6"
                    fontFamily="Manrope"
                  >
                    Profit/ Loss
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box h="41px" display="flex-end" alignItems="center" gap="9px">
              <VStack
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Text
                  color="black"
                  fontSize="24px"
                  fontWeight="400"
                  lineHeight="normal"
                  fontFamily="Ubuntu"
                  textColor=" var(--Primary-Text, #2E384D);"
                >
                  01-12-2023
                </Text>
                <Box alignItems="center" marginTop="-9px">
                  <Text
                    color="var(--Primary-Text, #2E384D)"
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="normal"
                    opacity="0.6"
                    fontFamily="Manrope"
                  >
                    Today
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Stack>
          <Box
            w="645px"
            h="200px"
            borderRadius="14px"
            textColor="black"
            border="1px solid rgba(222, 222, 222, 0.70);"
            justifySelf="center"
            bg="#FFF"
            ml="20.16px"
            overflow="hidden"
            padding="10px 10px 10px 10px"
          >
            <Graph />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
