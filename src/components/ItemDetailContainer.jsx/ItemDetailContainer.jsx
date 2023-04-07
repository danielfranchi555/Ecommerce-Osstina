import React, { useEffect, useState } from 'react'
import {db} from '../../firebase'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'



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
      
      
      if(loading){
        return <p>loading</p>
      }

  return (
    <>
        <ItemDetail product={product} />
    </>
  )
}
