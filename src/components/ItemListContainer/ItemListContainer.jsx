import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { collection, loadBundle, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import {  Center } from '@chakra-ui/react'
import Categories from '../Categories/Categories'
import Nav from '../Nav/Nav'
import { DotWave } from '@uiball/loaders'
import {  useParams } from 'react-router-dom'
import './index.scss'
import { SubNav } from '../SubNav/SubNav.'


const ItemListContainer = () => {

   const [products,setProducts] = useState([])
   const [Loading,setLoading] = useState(true)


    const {categorie}=useParams()
    
    const getProducts = ()=>{
      const queryCollection = collection(db,'products')
      onSnapshot((queryCollection),(prod)=>{
        setProducts(prod.docs.map(prod=> ({id:prod.id,...prod.data()})))
        setLoading(false)
       })
   }



   const productsFilter =  ()=>{
    const queryCollection = collection(db,'products')
     const queryFiltrada = query(queryCollection,where('categorie', '==',`${categorie}`))
     onSnapshot((queryFiltrada),(prod)=>{
        setLoading(false)
       setProducts(prod.docs.map(prod=> ({id:prod.id,...prod.data()})))
     })
 }



useEffect(()=>{
 if(categorie){
  productsFilter()
 }else{
  getProducts()
 }
},[categorie])






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
    <main style={{maxHeight:'50px'}} className='main'>
    <section className='nav'>
    <Nav/>
    </section>
    <section className='subNav'>
    <SubNav/>
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