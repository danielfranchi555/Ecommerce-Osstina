import { Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Stack  mb='20px' justify='center' direction='row'>
     <Button colorScheme='teal' border='none' variant='ghost'>Inicio</Button>
     <Button colorScheme='teal' border='none' variant='ghost'>Productos</Button>
     <Button colorScheme='teal' border='none' variant='ghost'>Como Comprar</Button>
     <Button colorScheme='teal' border='none' variant='ghost'>Contacto</Button>
    </Stack>
  )
}

export default Banner