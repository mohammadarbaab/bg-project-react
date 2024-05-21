import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Card,
  Center,
  Icon,
  Stack,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { object, string } from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const forgetValidationSchema = object({
    email: string().email("email is invalid").required("email is required"),
  });

  return (
    <div>
      <Center minH="100vh" bg="#352E6B">
        <Card
          p="6"
          borderRadius="16px"
          w="504px"
          color="black"
          bg="#FFF"
          h="460px"
          border="1px solid rgba(0, 0, 0, 0.15)"
        >
          <Center gap="8px" mt="45.18">
            <Image
              h="58px"
              w="62px"
              src="/images/logo.svg"
              alt="TradeRyt Logo"
              loading="lazy"
              flexShrink="0"
            />
            <Text
              color="rgba(0, 0, 0, 0.60)"
              fontFamily="Ubuntu"
              fontSize="34.554px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="47.378px"
              letterSpacing="1.9px"
            >
              TradeRyt
            </Text>
          </Center>
          <Text
            color="#574CB1"
            fontFamily="Ubuntu"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="600"
            letterSpacing="-0.24px"
            lineHeight="normal"
            mt="4"
            textAlign="center"
            textEdge="cap"
          >
            Forget Password{" "}
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={forgetValidationSchema}
          >
            {() => (
              <Center>
                <Form>
                  <Stack mt="8" spacing={8}>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            w="408px"
                            name="email"
                            padding="16px"
                            placeholder="enter your email"
                            border="1px solid black"
                            backgroundColor="white"
                            color="black"
                            _placeholder={{ color: "black" }}
                            _hover={{
                              border: "1px solid black",
                              backgroundColor: "white",
                              color: "black",
                            }}
                            _focus={{
                              border: "1px solid black",
                              boxShadow: "none",
                              backgroundColor: "white",
                              color: "black",
                            }}
                            _active={{
                              border: "1px solid black",
                              backgroundColor: "white",
                              color: "black",
                            }}
                          />

                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      w="408px"
                      padding="16px"
                      type="submit"
                      bg="#574CB1"
                      mt="4"
                      color="black"
                      border="1px solid black"
                    >
                      Send
                    </Button>
                    <Link to="/signin">
                      <Text
                        style={{
                          color: "var(--Primary-Text, #2E384D)",
                          fontFamily: "Manrope",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "normal",
                          letterSpacing: "-0.16px",
                          textAlign:"center",
                          leadingTrim: "both", 
                          textEdge: "cap",
                        }}
                      >
                        Back to Login
                      </Text>
                    </Link>
                  </Stack>
                </Form>
              </Center>
            )}
          </Formik>
        </Card>
      </Center>
    </div>
  );
}

export default ForgetPassword;
