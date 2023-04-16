import {
  Box,
  Center,
  Container,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Container mb='40px' maxW='container.lg'>

         <Stack
      align="center"
      w="100%"
      h="50px"
      direction="row"
      justifyContent='space-around'
    >
               <Center  >
               Inicio/<span style={{fontWeight:'900'}}>Productos</span>
               </Center>
        <Stack >
          <Tabs >
            <TabList direction="column">
            <Link to={`/`}>
                <Tab>Todo</Tab>
              </Link>
              <Link to={`/categorie/${"remera"}`}>
                <Tab>Remeras</Tab>
              </Link>
              <Link to={`/categorie/${"buzo"}`}>
                <Tab>Buzos</Tab>
              </Link>
              <Link to={`/categorie/${"campera"}`}>
                <Tab>Camperas</Tab>
              </Link>
              <Link to={`/categorie/${"pantalon"}`}>
                <Tab>Pantalones</Tab>
              </Link>
            </TabList>
          </Tabs>
        </Stack>
        <Text >Filtrar</Text>
     
    </Stack>
    </Container>
 
  );
};

export default Nav;
