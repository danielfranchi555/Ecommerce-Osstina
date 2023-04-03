import {  Container, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Categories = () => {
  return (
    <Container >
        <Stack spacing={0} >      
       <Text  fontSize='30px' fontWeight='700'> Categories</Text>
        <Stack  direction={['row','row','column']} >
        <Link>Remeras</Link>
        <Link>Pantalones</Link>
        <Link>Chakra</Link>
        <Link>Chakra UI</Link>
        <Link>Chakra UI</Link>
       </Stack>
    </Stack>
    </Container>
  
  )
}

export default Categories