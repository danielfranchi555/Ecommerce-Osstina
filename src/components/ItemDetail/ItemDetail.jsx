import { Container, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const ItemDetail = ({ product}) => {


   

  
   const fuckingImage = product.image?product.image:'no'

  const [imageCarousel,setimageCarousel]=useState(fuckingImage)
 



 console.log(fuckingImage)


  return (
    <Container maxW='container.lg'>
           <Stack mt='50px' justify="center" align="center">
      <Stack direction={['column', 'row']}>
        <Stack   flex={6}>
          <Image
          objectFit='cover'
          boxSize={{base:'auto',md:'400px'}}
          src={imageCarousel} alt="" /> 
          <Stack   direction='row'>
             {product.carousel? product.carousel.map((item)=>(
        <Stack key={item} >
            <Image         
            onClick={()=>setimageCarousel(item)}
            boxSize={{base:'auto',md:'70px'}}
            objectFit="cover"
            src={item}
          />
                </Stack>
            ))
            :
            null
        
        } 
          </Stack>
        </Stack>
        <Stack justify='center' align='center' spacing={0} flex={6}>
          <Text fontSize='30px'>{product.title}</Text>
          <Text fontSize='20px'>${product.price}</Text>
        </Stack>
      </Stack>
    </Stack>
    </Container>
 
  );
};
