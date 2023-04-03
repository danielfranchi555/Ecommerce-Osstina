import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { collection, loadBundle, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import {  Center, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Categories from '../Categories/Categories'
import Nav from '../Nav/Nav'
import { DotWave } from '@uiball/loaders'

import './index.scss'
const ItemListContainer = () => {

   const [products,setProducts] = useState([])
   const [Loading,setLoading] = useState(true)

    
    const getProducts = ()=>{
      const queryCollection = collection(db,'products')
      onSnapshot((queryCollection),(prod)=>{
        setProducts(prod.docs.map(prod=> ({id:prod.id,...prod.data()})))
        setLoading(false)
       })
   }

   useEffect(()=>{
   getProducts()
   },[])




  return (
<>
{Loading?
<Center mt='100px'>
   <DotWave 
  size={47}
  speed={1} 
  color="black" 
 />
</Center>
:
    <main className='main'>
    <section className='nav'>
    <Nav/>
    </section>
    <section className='categories'>
    <Categories/>
    </section>
    <section className='products'>
      <ItemList products={products}></ItemList>
    </section>
    </main>
}
</>

  
      
  )
}

export default ItemListContainer