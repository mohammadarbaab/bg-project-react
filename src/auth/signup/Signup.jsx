import {
  Box,
  Flex,
  Heading,
  Img,
  FormLabel,
  Text,
  Stack,
  FormControl,
  Checkbox,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FaGoogle } from "react-icons/fa";
import React from "react";

function Signup() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      minHeight="100vh"
      padding={{ base: "20px", md: "57px" }}
      alignItems="center"
      justifyContent="center"
      bg="#352E6B"
    >
      {/* Left side - Sign Up Page */}
      <Box
        width="480px" // Fixed width for the signup box
        borderRadius="16px"
        border="1px solid rgba(0, 0, 0, 0.15)"
        bg="#FFF"
        padding={{ base: "20px", md: "35.8px" }}
        marginBottom={{ base: "40px", md: "0" }}
        marginRight={{ md: "60px" }}
      >
        <Stack spacing="20px">
          <Flex alignItems="center" gap="9.5px">
            <Image
              h="58px"
              w="62px"
              src="/images/logo.svg"
              alt="TradeRyt Logo"
              loading="lazy"
            />
            <Text
              fontWeight="semibold"
              fontFamily="Ubuntu"
              fontSize={{ base: "24px", md: "34px" }}
              lineHeight="47px"
              letterSpacing="1px"
              color="rgba(0, 0, 0, 0.60)"
            >
              TradeRyt
            </Text>
          </Flex>
          <Heading
            color="rgba(0, 0, 0, 1)"
            fontFamily="Ubuntu"
            fontSize={{ base: "24px", md: "28px" }}
            fontWeight="600"
            mt='30px'
            letterSpacing="-0.32px"
          >
            Signup
          </Heading>
          <Formik
            initialValues={{
              email: "",
              username: "",
              password: "",
              firstname: "",
              terms: false,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Field name="firstname">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel
                          htmlFor="firstname"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                        >
                          First Name
                        </FormLabel>
                        <Input
                          {...field}
                          id="firstname"
                          placeholder="Enter your first name"
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel
                          htmlFor="email"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                        >
                          Email
                        </FormLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="username">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel
                          htmlFor="username"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                        >
                          Username
                        </FormLabel>
                        <Input
                          {...field}
                          id="username"
                          placeholder="Enter your username"
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel
                          htmlFor="password"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                        >
                          Password
                        </FormLabel>
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Flex alignItems="center" gap="10px">
                    <Checkbox name="terms" colorScheme="blue" size="lg" />
                    <Text
                      color="rgba(0, 0, 0, 0.70)"
                      fontFamily="Ubuntu"
                      fontSize="14px"
                      fontWeight="400"
                    >
                      I have read and agree to the{" "}
                      <Text as="span" color="#574CB1" fontWeight="600">
                        Terms and Conditions
                      </Text>
                    </Text>
                  </Flex>
                  <Button
                    type="submit"
                    width="100%"
                    padding="16px"
                    fontFamily="Ubuntu"
                    borderRadius="16px"
                    background="#574CB1"
                    height="7vh"
                    color="#FFF"
                    mt="24px"
                  >
                    Signup
                  </Button>
                  <Button
                    type="button"
                    width="100%"
                    padding="16px"
                    fontFamily="Ubuntu"
                    borderRadius="6px"
                    height="7vh"
                    color="black"
                    border="1px solid black"
                    mt="24px"
                    leftIcon={<FaGoogle />}
                  >
                    Signup with Google
                  </Button>
                  <Box textAlign="center" mt="24px">
                    <Text
                      fontFamily="Ubuntu"
                      fontSize="16px"
                      color="var(--Secondary-Text, #8798AD)"
                      fontWeight="400"
                    >
                      Already a user?{" "}
                      <Text as="span" color="#574CB1" fontWeight="600">
                        Login
                      </Text>
                    </Text>
                    <Text
                      fontFamily="Ubuntu"
                      fontSize="16px"
                      color="var(--Secondary-Text, #8798AD)"
                      fontWeight="400"
                      mt="8px"
                    >
                      By clicking ‘Sign Up’ you agree to our{" "}
                      <Text as="span" color="#574CB1" fontWeight="600">
                        Terms of Use
                      </Text>
                    </Text>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Box>
      {/* Right side - Info Section */}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={{ base: "100%", md: "50%" }}
      >
        <Box
          width="100%"
          height="auto"
          borderRadius="14px"
          marginBottom="20px"
          marginRight={{ base: "0", md: "30px" }}
          padding="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Img src="/images/logo.svg" width="50%" />
        </Box>

        {/* Text */}
        <Box
          color="#FFF"
          fontFamily="Manrope"
          fontSize="24px"
          fontWeight="600"
          letterSpacing="0.96px"
          textAlign="center"
          marginBottom="20px"
          width="100%"
        >
          Meet the New Trading Journal
        </Box>

        <Box
          color="rgba(255, 255, 255, 0.60)"
          fontFamily="Manrope"
          fontSize="18px"
          fontWeight="400"
          letterSpacing="0.72px"
          textAlign="center"
          lineHeight="1.5"
          maxWidth="480px"
          marginRight={{ base: "0", md: "30px" }}
        >
          <Text>
            Revolutionize your trading experience with our cutting-edge
            journaling software. Effortlessly track, analyze, and optimize your
            trades for success and growth.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Signup;
