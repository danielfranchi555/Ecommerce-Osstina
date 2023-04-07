import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
 
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/'  element={<ItemListContainer/>} />
        <Route path='/categorie/:categorie'  element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
