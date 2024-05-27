import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Ubuntu',
    body: 'Ubuntu',
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#F4F6FC;", // Set the default background color to white
        color: "black", // Set the default text color to black
      },
      "svg": {
        color: "black", // Set the default icon color to black
      },
    },
  },
});
