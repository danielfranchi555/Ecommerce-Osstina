import { ChevronDownIcon } from '@chakra-ui/icons'
import {  Box, Container, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SubNav = () => {
  return (
    <Stack h='50px' bg='#3e4a61' color='white' w='100%' >
    <Container mt='5px' maxWidth='container'  >
          <Stack direction='row' alignItems='center'   justify='space-around'>
            <Box> 
          Inicio/ <span style={{fontWeight:'800'}}>Productos</span>
            </Box>
 <Stack align='flex-end' flex={1}>
 <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _expanded={{ bg: '#3e4a61' }}
  >
    Categorias <ChevronDownIcon />
  </MenuButton>
  <MenuList bg='#3e4a61'>
  <Link to={`/`}>
    <MenuItem bg='#3e4a61'>Todo</MenuItem>
    </Link>
    <Link to={`/categorie/${'remera'}`}>
    <MenuItem bg='#3e4a61'>Remeras</MenuItem>
    </Link>
    <Link to={`/categorie/${'buzo'}`}>
    <MenuItem bg='#3e4a61'>Buzos</MenuItem>
    </Link>
    <Link to={`/categorie/${'pantalon'}`}>
    <MenuItem bg='#3e4a61'>Pantalones</MenuItem>
    </Link>
    <Link to={`/categorie/${'campera'}`}>
    <MenuItem bg='#3e4a61'>Camperas</MenuItem>
    </Link>
  </MenuList>
</Menu>
  </Stack>
  </Stack>
    </Container>

   
   
   
  </Stack>   
        


  )
}
