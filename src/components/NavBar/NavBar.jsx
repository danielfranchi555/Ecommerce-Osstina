import {
  Badge,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import carrito from "../../img/carrito.png";
import { useRef, useState } from "react";
import { UsarContexto } from "../Context/Context";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { cart, setCart } = UsarContexto();

  const deleteProd = (id) => {
    setCart(cart.filter((prod) => prod.id != id));
    console.log(id);
  };

  return (
    <>
      <Stack bg=" #f9f9f9">
        <Container maxWidth="container.xl">
          <Stack h="70px" direction="row" alignItems="center">
            <Stack h="auto" flex={1}>
              <Input w={{ base: "100px", md: "100px" }} placeholder="buscar" />
            </Stack>
            <Text textAlign="center" flex={1} fontSize="45px">
              <Link to={"/"}>Osstina</Link>
            </Text>

            <Stack align={{ base: "center", md: "flex-end" }} flex={1}>
              <Stack justify="center" align="center" direction="row">
                {cart.length === 0 ? null : (
                  <Badge px={3} borderRadius={10} fontSize="1.2em" colorScheme="purple">
                    <Center fontWeight="800">{cart.length}</Center>
                  </Badge>
                )}

                <Image
                  onClick={onOpen}
                  src={carrito}
                  style={{ width: "30px" }}
                  alt=""
                />
              </Stack>
            </Stack>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              size="lg"
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Pedidos</DrawerHeader>
                {cart.length === 0 ? (
                  <Center>No hay productos en el carrito</Center>
                ) : (
                  <>
                    <DrawerBody>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead>
                            <Tr>
                              <Th>Prenda</Th>
                              <Th>Nombre</Th>
                              <Th>Precio</Th>
                              <Th>Eliminar</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {cart.map((item) => (
                              <Tr>
                                <Td>
                                  {" "}
                                  <img src={item.image} width="70px" alt="" />
                                </Td>
                                <Td fontSize={15}>{item.title}</Td>
                                <Td>${item.price}</Td>
                                <Td>
                                  {" "}
                                  <Button onClick={() => deleteProd(item.id)}>
                                    x
                                  </Button>{" "}
                                </Td>
                              </Tr>
                            ))}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="blue">Realizar Pedido</Button>
                    </DrawerFooter>
                  </>
                )}
              </DrawerContent>
            </Drawer>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default NavBar;
