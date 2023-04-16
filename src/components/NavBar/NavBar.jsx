import {  Container, Input, Stack, Text } from "@chakra-ui/react";
import carrito from "../../img/carrito.png";
const NavBar = () => {
  return (
    <>
      <Stack bg=" #f9f9f9">
        <Container maxWidth="container.xl">
          <Stack direction="row" alignItems="center">
            <Stack h="auto" flex={1}>
              <Input w={{ base: "100px", md: "150px" }} placeholder="buscar" />
            </Stack>
            <Text textAlign="center" flex={1} fontSize="40px">
              <a href="/">Osstina</a>
            </Text>

            <Stack align="flex-end" flex={1}>
              <img src={carrito} style={{ width: "30px" }} alt="" />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default NavBar;
