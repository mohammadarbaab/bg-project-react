import { Box, Flex } from "@chakra-ui/react";
import SideNav from './Sidenav'
import TopNav from "./TopNav";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Sidedrawer from "./Sidedrawer";

function Dashboardlayout() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <SideNav  /> 
        <Sidedrawer isOpen={isOpen} onClose={onClose} />
      <TopNav onOpen={onOpen}/>
    </Flex>
  );
}

export default Dashboardlayout;
