import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx/ItemDetailContainer";

function App() {

  return (
 
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/'  element={<ItemListContainer/>} />
        <Route path='/detail/:id'  element={<ItemDetailContainer/>} />
        <Route path='/categorie/:categorie'  element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
