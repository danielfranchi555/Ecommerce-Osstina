import React, { useEffect, useState } from 'react'
import {db} from '../../firebase'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'
import { DotWave } from '@uiball/loaders'



export const ItemDetailContainer = () => {
   const [product,setProduct] = useState({})
   const [loading,setLoading]=useState(true)

   const {id}=useParams()

    const getProduct = async ()=>{
        const prod = await getDoc(doc(db, "products", id));
        setProduct({id:prod.id , ... prod.data()})
       setLoading(false)
      }
      console.log(product)

      useEffect(()=>{
      getProduct()
      },[])
      
      
    

  return (
    <>
    {loading?
    
  <Center mt='200px'>
       <DotWave
  size={47}
  speed={1} 
  color="black" 
 />
  </Center>:

        <ItemDetail product={product} />
}
    </>
  )
}
