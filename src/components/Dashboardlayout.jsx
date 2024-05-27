import { Box, Flex } from "@chakra-ui/react";
import SideNav from './Sidenav'
import TopNav from "./TopNav";
import React from "react";
import Portfolio from "../pages/Dashboard/Portfolio";
import Portfolio_2 from "../pages/Dashboard/Portfolio_2";

function DashboardLayout() {
  return (
    <Box width="1920px" height="1080px">
      <Flex height="100%">
        <SideNav />
        <Box flex="1" flexDirection="column">
          <TopNav />
          <Box p="4"display="flex" gap="21px">
            <Portfolio /> <Portfolio_2 />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default DashboardLayout;
