import "./App.css";
import NavBar from "./components/NavBar/NavBar";
//import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";


function App() {


  return (
    <div className="App">
      <NavBar />            
      {/* <ItemListContainer /> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

