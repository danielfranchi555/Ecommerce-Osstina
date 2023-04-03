import React from 'react'
import Item from '../Item/Item'
import {  SimpleGrid } from '@chakra-ui/react'

const ItemList = ({products}) => {
  return (
       <SimpleGrid  minChildWidth='200px'>
            {products.map((item)=>(
               <Item item={item}></Item>
            ))}
          </SimpleGrid>
   
  )
}

export default ItemList