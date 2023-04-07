import React from 'react'
import Item from '../Item/Item'
import {SimpleGrid} from '@chakra-ui/react'

const ItemList = ({products}) => {
  return (
       <SimpleGrid    minChildWidth={{base:'150px',md:'210px'}}>
            {products.map((item)=>(
               <Item key={item.id} item={item}></Item>
            ))}
          </SimpleGrid>
   
  )
}

export default ItemList