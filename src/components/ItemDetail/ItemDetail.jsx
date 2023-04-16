import { Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { UsarContexto } from "../Context/Context";

export const ItemDetail = ({ product }) => {
  const fuckingImage = product.image ? product.image : "no";

  const [imageCarousel, setimageCarousel] = useState(fuckingImage);
   
  const {addToCart} = UsarContexto()

  return (
    <Container  h="auto" w="100%" maxW="container.lg">
      <Stack mt="20px" justify="center" align="center">
        <Stack w={{ base: "auto", md: "700px" }} direction={["column", "row"]}>
          <Stack direction={["column", "column"]} flex={7}>
            <Image
             boxShadow='lg' rounded='lg' 
              boxSize={{ base: "100%", md: "500px" }}
              objectFit="cover"
              src={imageCarousel}
              alt="Dan Abramov"
            />
            <Stack direction="row">
              {product.carousel
                ? product.carousel.map((item) => (
                    <Stack w="100%" key={item}>
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
          <Stack spacing={3} flex={4}>
            <Text fontSize="30px">{product.title}</Text>
            <Text fontSize="20px">${product.price}</Text>
            <Button  w='150px' variant='outline' colorScheme="green" onClick={()=>addToCart(product)}>Añadir</Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
