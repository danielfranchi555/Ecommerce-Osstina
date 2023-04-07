import {  Button, Container, Stack, Text } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <Container border='solid green'   >
        <Stack spacing={0} >      
       <Text  fontSize='auto' fontWeight='700'> Categories</Text>
        <Stack  direction={['row','row','column']} >
           <Link to={`/categorie/${'remera'}`}>
        <Button >remera</Button>
       </Link>
       <Link to={`/categorie/${'buzo'}`}>
        <Button>Buzos</Button>
       </Link>
       <Link to={`/categorie/${'campera'}`}>
        <Button>campera</Button>
       </Link>
       </Stack>
    </Stack>
    </Container>
  
  )
}

export default Categories