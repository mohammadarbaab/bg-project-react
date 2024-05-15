import {
  Box,
  Flex,
  Heading,
  Img,
  FormLabel,
  Text,
  Stack,
  Image,
  FormControl,
  Checkbox,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Input } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { object, string } from "yup";

import React from "react";

// const signupValidationSchema = object({
//   name: string().required("Name is required"),
//   username: string().required("Surname is required"),
//   email: string().email("Email is invalid").required("Email is required"),
//   password: string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

function Signup() {
  return (
    <Flex
      display="inline-flex"
      height="100%"
      padding={{ base: "57px 5%", md: "57px 10.616px 57px 57px" }}
      alignItems="center"
      justifyContent="space-between"
      gap="60.287px"
      bg="#352E6B"
      flexWrap="wrap"
      width="full"
    >
      {/* Left side - Sign Up Page */}
      <Box
        width={{ base: "100%", md: "480px" }}
        height="auto"
        borderRadius="16px"
        border="1px solid rgba(0, 0, 0, 0.15)"
        bg="#FFF"
        padding="20px"
        marginBottom={{ base: "40px", md: "0" }}
        position="relative"
      >
        {/* Content of the Sign Up Page */}
        <Stack
          direction="column"
          alignItems="start"
          justifyContent="start"
          spacing="9.5px"
          padding="35.8px"
        >
          <Flex alignItems="center" gap="9.5px">
            <Image
              h="58px"
              w="62.1px"
              src="/images/logo.svg"
              alt=""
              loading="lazy"
              flexShrink="0"
            />
            {/* "TradeRyt" Heading */}
            <Text
              fontWeight="semibold"
              fontFamily="Ubuntu"
              fontSize="34.554px"
              fontStyle="normal"
              lineHeight="47.378px"
              letterSpacing="1.037px"
              color="rgba(0, 0, 0, 0.60)"
              textAlign="left"
              display="inline-block"
            >
              TradeRyt
            </Text>
          </Flex>
          {/* Signup Heading */}
          <Heading
            as="h1"
            color="rgba(0, 0, 0, 1)"
            fontFamily="Ubuntu"
            fontSize="32px"
            fontWeight="600"
            mt="40px"
            letterSpacing="-0.32px"
          >
            Signup
          </Heading>
          {/* Signup Form */}
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
                <Stack spacing={1}>
                  <Field name="name">
                    {({ field }) => (
                      <Flex
                        flexDirection="column"
                        alignItems="flex-start"
                        gap="6px"
                        mt="10px"
                      >
                        <FormLabel
                          htmlFor="name"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                          lineHeight="normal"
                          letterSpacing="-0.14px"
                        >
                          First Name
                        </FormLabel>
                        <Input
                          {...field}
                          id="name"
                          type="text"
                          fontFamily="Ubuntu"
                          placeholder="Enter your first name"
                          width={{ base: "100%", md: "350px" }}
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                          background="#FFF"
                          color="black"
                          _placeholder={{ color: "gray.500" }} // Placeholder color
                        />
                      </Flex>
                    )}
                  </Field>
                  <Field name="username">
                    {({ field }) => (
                      <Flex
                        flexDirection="column"
                        alignItems="flex-start"
                        gap="8px"
                        mt="14px"
                      >
                        <FormLabel
                          htmlFor="username"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                          lineHeight="normal"
                          letterSpacing="-0.14px"
                        >
                          Email
                        </FormLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          fontFamily="Ubuntu"
                          placeholder="Enter your email"
                          width={{ base: "100%", md: "350px" }}
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                          background="#FFF"
                          color="black"
                          _placeholder={{ color: "gray.500" }}
                        />
                      </Flex>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }) => (
                      <Flex
                        flexDirection="column"
                        alignItems="flex-start"
                        gap="8px"
                        mt="14px"
                      >
                        <FormLabel
                          htmlFor="password"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                          lineHeight="normal"
                          letterSpacing="-0.14px"
                        >
                          Username
                        </FormLabel>
                        <Input
                          {...field}
                          id="name"
                          type="name"
                          fontFamily="Ubuntu"
                          placeholder="Enter your Username"
                          width={{ base: "100%", md: "350px" }}
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                          background="#FFF"
                          color="black"
                          _placeholder={{ color: "gray.500" }}
                        />
                      </Flex>
                    )}
                  </Field>
                  <Field name="firstname">
                    {({ field }) => (
                      <Flex
                        flexDirection="column"
                        alignItems="flex-start"
                        gap="8px"
                        mt="14px"
                      >
                        <FormLabel
                          htmlFor="firstname"
                          color="rgba(103, 103, 103, 0.60)"
                          fontFamily="Ubuntu"
                          fontSize="14px"
                          fontWeight="300"
                          lineHeight="normal"
                          letterSpacing="-0.14px"
                        >
                          Password
                        </FormLabel>
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          fontFamily="Ubuntu"
                          placeholder="Enter your password"
                          width={{ base: "100%", md: "350px" }}
                          height="6vh"
                          padding="10px"
                          borderRadius="3px"
                          border="1px solid rgba(103, 103, 103, 0.60)"
                          background="white"
                          color="black"
                          _placeholder={{ color: "gray.500" }}
                        />
                      </Flex>
                    )}
                  </Field>
                  <Flex mt="32px">
                    <Flex alignItems="center" gap="10px">
                      <Checkbox
                        name="terms"
                        borderColor="black"
                        width="24px"
                        height="24px"
                        borderWidth="2px"
                        borderStyle="solid"
                        borderColor="blue"
                        color="rgba(0, 0, 0, 0.70)"
                      />
                      <Text
                        color="rgba(0, 0, 0, 0.70)"
                        fontFamily="Ubuntu"
                        fontSize="14px"
                        fontWeight="400"
                        lineHeight="normal"
                        letterSpacing="-0.16px"
                      >
                        I have read and agree to the{" "}
                        <Text as="span" color="#574CB1" fontWeight="600">
                          Terms and Conditions
                        </Text>
                      </Text>
                    </Flex>
                  </Flex>
                  <Button
                    type="submit"
                    display="flex"
                    width={{ base: "100%", md: "350px" }}
                    padding="16px"
                    justifyContent="center"
                    alignItems="center"
                    gap="8px"
                    fontFamily="Ubuntu"
                    borderRadius="16px"
                    background="#574CB1"
                    height="7vh"
                    color="#FFF"
                    mt="32px"
                  >
                    Signup
                  </Button>
                  <Button
                    type="button"
                    display="flex"
                    width={{ base: "100%", md: "350px" }}
                    padding="16px"
                    justifyContent="center"
                    alignItems="center"
                    gap="8px"
                    fontFamily="Ubuntu"
                    borderRadius="6px"
                    height="7vh"
                    color="black"
                    border="1px solid black"
                    mt="32px"
                  >
                    <Icon as={FaGoogle} />
                    Signip with Google
                  </Button>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="12px"
                    mt="32px"
                  >
                    <Text
                      fontFamily="Ubuntu"
                      fontSize="16px"
                      fontStyle="normal"
                      lineHeight="normal"
                      letterSpacing="-0.16px"
                      color="var(--Secondary-Text, #8798AD)" // Apply CSS color to the text
                      fontWeight="400" // Apply font weight to the text
                      textEdge="cap" // Apply text edge property
                      leadingTrim="both" // Apply leading trim property
                    >
                      Already a user?{" "}
                      <Text
                        as="span"
                        color="#574CB1" // Apply different color to the word "Login"
                        fontWeight="600" // Apply different font weight to the word "Login"
                      >
                        Login
                      </Text>
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap="12px"
                    >
                      <Text
                        fontFamily="Ubuntu"
                        fontSize="16px"
                        fontStyle="normal"
                        lineHeight="normal"
                        letterSpacing="-0.16px"
                        color="var(--Secondary-Text, #8798AD)" // Apply CSS color to the text
                        fontWeight="400" // Apply font weight to the text
                        textEdge="cap" // Apply text edge property
                        leadingTrim="both" // Apply leading trim property
                      >
                        By clicking ‘Sign Up’ you agree to our{" "}
                        <Text
                          as="span"
                          color="#574CB1" // Apply different color to the word "Login"
                          fontWeight="600" // Apply different font weight to the word "Login"
                        >
                          Terms of Use
                        </Text>
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={{ base: "100%", md: "auto" }}
      >
        <Box
          width={{ base: "100%", md: "480px" }}
          height="260px"
          borderRadius="14px"
          marginBottom="20px"
          marginRight={{ base: "0", md: "100px" }}
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
          fontSize="32px"
          fontWeight="600"
          letterSpacing="0.96px"
          textAlign="center"
          marginBottom="20px"
          width={{ base: "100%", md: "auto" }}
        >
          {/* Text below the logo */}
        </Box>

        <Box
          color="rgba(255, 255, 255, 0.60)"
          fontFamily="Manrope"
          fontSize="24px"
          fontWeight="400"
          letterSpacing="0.72px"
          textAlign="center"
          lineHeight="1.5"
          maxWidth={{ base: "100%", md: "480px" }}
          marginRight={{ base: "0", md: "90px" }}
        >
          <Heading as="h3" color="#FFFFFF">
            Meet the New Trading Journal
          </Heading>
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
