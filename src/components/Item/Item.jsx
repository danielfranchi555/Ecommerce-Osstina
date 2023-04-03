import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Divider, Heading, Image, Stack, StackDivider, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Item = ({item}) => {

  
  return (
<Card  maxW='xs'>
  <CardBody>
            <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '300px' }}
      maxH={{ base: '100%', sm: '270px' }}
      src={item.image}
      alt='Green double couch with wooden legs'
    />

    <Stack justify='center' align='center' mt='1' spacing='2'>
            <Heading size='md'>{item.title}</Heading>
   
      <Text color='black.600' fontSize='1xl'>
        $450
      </Text> 
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
 {/*    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup> */}
  </CardFooter>
</Card>
 

  )
}

export default Item