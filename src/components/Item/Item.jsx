import {  Image, Stack,  Text} from '@chakra-ui/react'
import React from 'react'

const Item = ({item}) => {

  
  return (

    
       <Stack justify='center' spacing={0} p={1} align='center'  w='auto'> 
       <Fade>
         <Image src={item.image} w={{base:'auto',md:'auto'}} alt="" />
       </Fade>    
               <Text>Buzo</Text>
               <span style={{fontWeight:'800'}}> ${item.price}</span>
              </Stack>
  
              
 

  )
}

export default Item