import React from 'react'
import Item from '../Item/Item'
import { Center, Wrap, WrapItem } from '@chakra-ui/react'

const ItemList = ({products}) => {
  return (
    <Wrap  w='100%' justify='center'>
        {products.map((item)=>(
            <WrapItem w='auto'   h='auto'>
                <Center>
                <Item item={item}></Item>
                </Center>
            </WrapItem>
        ))}
    </Wrap>
  )
}

export default ItemList