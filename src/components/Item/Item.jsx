import {  Image, Stack,  Text} from '@chakra-ui/react'
import React from 'react'

const Item = ({item}) => {

  
  return (

    
       <Stack  justify='center'  p={1} align='center'  w='auto'> 
         <Image src={item.image} maxW={{base:'auto',md:'190px'}} alt="" />
               <Text>{item.title}</Text>
               <span style={{fontWeight:'800'}}> ${item.price}</span>
              </Stack>
  
              
 

  )
}

export default Item