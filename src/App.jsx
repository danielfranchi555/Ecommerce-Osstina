import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemList from "./components/ItemList/ItemList"
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
