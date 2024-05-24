import { Box, Flex } from "@chakra-ui/react";
import SideNav from './Sidenav'
import TopNav from "./TopNav";
import React from "react";
import Portfolio from "../pages/Dashboard/Portfolio";

function DashboardLayout() {
  return (
    <Box width="1920px" height="1080px" bg="#F4F6FC;">
      <Flex height="100%">
        <SideNav />
        <Box flex="1" flexDirection="column">
          <TopNav />
          <Box p="4">
            <Portfolio />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default DashboardLayout;
