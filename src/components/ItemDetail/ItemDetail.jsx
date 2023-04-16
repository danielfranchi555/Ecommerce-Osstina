import { Button, Center, Container, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { UsarContexto } from "../Context/Context";

export const ItemDetail = ({ product }) => {
  const fuckingImage = product.image ? product.image : "no";

  const [imageCarousel, setimageCarousel] = useState(fuckingImage);
   
  const {addToCart} = UsarContexto()

  return (
    <Container  h="auto" w="100%" maxW="container.lg">
      <Stack  mt="20px" justify="center" align="center">
        <Stack spacing={0}  w={{ base: "auto", md: "700px" }} direction={["column", "row"]}>
          <Stack direction={["column", "column"]}>
            <Image
             boxShadow='lg' rounded='lg' 
              boxSize={{ base: "100%", md: "350px" }}
              objectFit="cover"
              src={imageCarousel}
              alt="Dan Abramov"
            />
            <Stack direction="row">
              {product.carousel
                ? product.carousel.map((item) => (
                    <Stack w={{base:"100%",md:'auto'}} key={item}>
                      <Image
                        borderRadius="lg"
                        cursor="pointer"
                        onClick={() => setimageCarousel(item)}
                        h={{ base: "100px", md: "110px" }}
                        w="100%"
                        objectFit="cover"
                        src={item}
                      />
                    </Stack>
                  ))
                : null}
            </Stack>
          </Stack>
          <Stack   w={{base:'100%',md:'50%'}}  >
            <Center  fontSize="20px">{product.title}</Center>
            <Stack align='center'  justify='center' direction='row'>
              <Center flex={1} fontSize="20px" fontWeight='800' >Precio: ${product.price}</Center>
            <Button flex={1} size='md' variant='outline' colorScheme="green" onClick={()=>addToCart(product)}>Añadir</Button> 
            </Stack>
        
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
