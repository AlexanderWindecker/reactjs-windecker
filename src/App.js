import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import MyProvider from "./components/context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:cat" element={<ItemListContainer />} />
          <Route path="/pasteles/:id" element={<ItemDetailContainer />} />
          <Route path="/404" element={<h1>te perdiste</h1>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
