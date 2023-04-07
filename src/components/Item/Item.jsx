import {  Box, Center, Image, Stack,  Text} from '@chakra-ui/react'
import React from 'react'

const Item = ({item}) => {

  
  return (

    
       <Stack   justify='center'  p={1} align='center'  w='auto'> 
         <Stack w={{base:'auto'}}  align='center'  >
         <Image src={item.image} h={{base:'200px',md:'auto'}} maxW={{base:'auto',md:'190px'}} alt="" />
          <Box  fontSize={{base:'13px'}}>
            {item.title}
          </Box>
          <Box fontWeight='800'>
             ${item.price}              
          </Box>
         </Stack>
             
              </Stack>
  
              
 

  )
}

export default Item