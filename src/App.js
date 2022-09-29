import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>      
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:cat" element={<ItemListContainer />} />
          <Route path="/pasteles/:id" element={<ItemDetailContainer />} />
          <Route path="/404" element={<h1>te perdiste</h1>} />
        </Routes>
     
      
    </BrowserRouter>
  );
}

export default App;
