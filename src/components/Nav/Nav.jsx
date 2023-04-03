import { Box, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
  return ( 
    <Container maxW='container.xxl'>
          <Stack   align='center' w='100%' h='60px' direction='row' justifyContent='space-between' >
            <Box>
            <Text>
            Inicio/Productos
           </Text>
            </Box>
            <Box>
            <Text>
            Filtrar
           </Text>
            </Box>
    </Stack>
    </Container>
       
   
 
  )
}

export default Nav