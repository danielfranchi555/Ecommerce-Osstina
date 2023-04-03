import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { firebaseConection } from './firebase'
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'

firebaseConection()
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
 
)
