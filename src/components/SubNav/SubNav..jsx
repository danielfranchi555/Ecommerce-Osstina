import { ChevronDownIcon } from '@chakra-ui/icons'
import {  Box, Center, Container, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SubNav = () => {
  return (
    <Stack h='50px' bg='#dfd3c3' w='100%' >
    <Container mt='5px' maxWidth='container'  >
          <Stack direction='row' alignItems='center'   justify='space-around'>
            <Box> 
          Inicio/Productos
            </Box>
 <Stack align='flex-end' flex={1}>
 <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
  >
    Categorias <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <Link to={`/categorie/${'remera'}`}>
    <MenuItem>Remeras</MenuItem>
    </Link>
    <Link to={`/categorie/${'buzo'}`}>
    <MenuItem>Buzos</MenuItem>
    </Link>
    <Link to={`/categorie/${'pantalon'}`}>
    <MenuItem>Pantalones</MenuItem>
    </Link>
    <Link to={`/categorie/${'campera'}`}>
    <MenuItem>Camperas</MenuItem>
    </Link>
  </MenuList>
</Menu>
  </Stack>
  </Stack>
    </Container>

   
   
   
  </Stack>   
        


  )
}
