import { Box,  Container,  Grid,  Input,  Stack, Text} from '@chakra-ui/react';
import carrito from '../../img/carrito.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
   

	return (
       <>
       

      <Stack bg=' #f9f9f9' >
        <Container maxWidth='container.xl'  >
              <Stack direction='row' alignItems='center'  justify='space-around'>
     <Stack h='auto'  flex={1}>
      <Input w={{base:'100px',md:'150px'}} placeholder='buscar'/>
      </Stack>
      <Link to={'/'}>
      <Text textAlign='center' flex={1} fontSize='40px'  >Osstina</Text>
      </Link>
     <Stack   align='flex-end' flex={1}>
      <img src={carrito} style={{width:'30px'}} alt="" />
      </Stack>
      </Stack>
        </Container>
  
       
       
       
      </Stack>   
       </>
          
   
        
       
          

           
         

        
	);
}

export default NavBar

{/* <Stack justify='center' align='center'>
<Box>
<Input variant='outline' placeholder='Buscar' />
</Box>
</Stack>
<Stack justify='center' align='center' >
<Box fontSize={{base:'29px',md:'47px'}}>
Osstina
</Box>
</Stack>
<Stack justify='center' align='center'>
<img src={carrito} style={{width:'25px'}} alt="" />
</Stack> */}