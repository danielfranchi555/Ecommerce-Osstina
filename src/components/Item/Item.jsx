import {  Box, Center, Image, Stack,  Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

  
  return (

   

      <Stack   justify='center'  p={1} align='center'  w='auto'> 
         <Stack w={{base:'auto'}}  align='center'  >
          <Link to={`/detail/${item.id}`}>
         <Image src={item.image} objectFit='cover' h={{base:'200px',md:'auto'}} maxW={{base:'auto',md:'190px'}} alt="" />
          </Link>
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