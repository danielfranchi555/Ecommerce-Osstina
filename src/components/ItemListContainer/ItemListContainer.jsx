import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { collection, loadBundle, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { Box, Center, Container, Grid, GridItem, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Categories from '../Categories/Categories'
import Nav from '../Nav/Nav'
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
<main className='main'>
<section className='nav'>
<Nav/>
</section>
<section className='categories'>
<Categories/>
</section>
<section className='products'>

            <SimpleGrid  minChildWidth='180px'>
            {products.map((item)=>(
               <Stack justify='center' spacing={0} p={1} align='center'  w='auto'> 
               <Image src={item.image} w={{base:'auto',md:'auto'}} alt="" />
               <Text>Buzo</Text>
               <span style={{fontWeight:'800'}}> ${item.price}</span>
              </Stack>
            ))}
          </SimpleGrid>

</section>

</main>

</>
/*     <Container  maxW='container.xl'>
            <Grid  w='100%' templateColumns="repeat(6,1fr)" >
             <GridItem  colSpan={{base:'6',lg:'6',md:'6'}}  >
         <Nav/>
        </GridItem>
    <GridItem mt='20px' colSpan={{base:'6',lg:'1',md:'1'}}  >
      <Categories/>
    </GridItem>
    <GridItem mt='20px' w='100%' colSpan={{base:'6',lg:'5',md:'5'}}>
     
            <SimpleGrid  minChildWidth='170px'>
    {products.map((item)=>(
       <Stack justify='center' spacing={0} p={1} align='center'  w='auto'> 
       <Image src={item.image} w={{base:'auto',md:'auto'}} alt="" />
       <Text>Buzo</Text>
       <span style={{fontWeight:'800'}}> ${item.price}</span>
      </Stack>
    ))}
  </SimpleGrid>
    </GridItem>
   </Grid>
    </Container> */
 
  
  
      
  )
}

export default ItemListContainer