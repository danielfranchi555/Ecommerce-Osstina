import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Divider, Heading, Image, Stack, StackDivider, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Item = ({item}) => {

  
  return (
<Stack justify='center' spacing={0} p={1} align='center'  w='auto'> 
               <Image src={item.image} w={{base:'auto',md:'auto'}} alt="" />
               <Text>Buzo</Text>
               <span style={{fontWeight:'800'}}> ${item.price}</span>
              </Stack>
 

  )
}

export default Item