import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import carrito from '../../img/carrito.png'
const NavBar = () => {
   

	return (
       <>



<Grid   w='100%' h='70px' bg=' #fafaf6' templateColumns='repeat(3, 1fr)' gap={1}>
<Stack justify='center' align='center'>
  <Box>
  search
  </Box>
</Stack>
<Stack justify='center' align='center' >
  <Box fontSize={{base:'29px',md:'37px'}}>
  Osstina
  </Box>
</Stack>
<Stack justify='center' align='center'>
<img src={carrito} style={{width:'25px'}} alt="" />
  </Stack>
</Grid>

          
       </>
          
   
        
       
          

           
         

        
	);
}

export default NavBar