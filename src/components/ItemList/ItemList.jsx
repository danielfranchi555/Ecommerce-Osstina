import React from 'react'
import Item from '../Item/Item'
import { Center, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'

const ItemList = ({products}) => {
  return (
    <SimpleGrid  minChildWidth='180px'>
            {products.map((item)=>(
               <Item item={item}></Item>
            ))}
          </SimpleGrid>
  )
}

export default ItemList