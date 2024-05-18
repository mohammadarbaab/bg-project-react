import React from 'react'
import SideNav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import { Container, Flex } from '@chakra-ui/react'

function Dashboard() {
  return (
    <div>
    <Flex>
    <SideNav /> <TopNav />
    </Flex>
    </div>
  )
}

export default Dashboard
