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
import ReactWhatsapp from 'react-whatsapp';
import carrito from "../../img/carrito.png";
import { useRef } from "react";
import { UsarContexto } from "../Context/Context";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { cart, setCart, totalCart } = UsarContexto();

  const deleteProd = (id) => {
    setCart(cart.filter((prod) => prod.id != id));
    console.log(id);
  };

  const text = cart.reduce((mess, prod) => mess.concat(`Producto: ${prod.title}\n`),"");
  const PagoTerminado = text.concat(`Precio Total :$${totalCart()}`);

  console.log(PagoTerminado)
  return (
    <>
      <Stack bg=" #f9f9f9">
        <Container maxWidth="container.xl">
          <Stack
            h="auto"
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Stack textAlign="center" fontSize="45px">
              <Link to={"/"}>Osstina</Link>
            </Stack>

            <Stack>
              <Stack align="center" direction="row">
                {cart.length === 0 ? null : (
                  <Badge
                    px={3}
                    borderRadius={10}
                    fontSize="1.2em"
                    colorScheme="green"
                  >
                    <Center fontWeight="800">{cart.length}</Center>
                  </Badge>
                )}

                <Image
                  cursor="pointer"
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
                      <Center fontWeight="900" mr={3}>
                        Total: ${totalCart()}
                      </Center>
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                      </Button>

                      <ReactWhatsapp number="351-200-2606" message={'Hola quiero realizar este pedido:\n'+ ' ' +PagoTerminado}> <Button colorScheme="green" variant='outline'>Confirmar Pedido</Button> </ReactWhatsapp>
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
