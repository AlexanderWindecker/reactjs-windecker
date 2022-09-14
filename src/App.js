import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemCount from "./components/Products/ItemCount";

function App() {
  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };

  return (
    <div className="App">
      <NavBar />

      <ItemCount onAdd={onAdd} initial={1} stock={8} />
      <ItemListContainer greeting="Mi productos" />
    </div>
  );
}

export default App;
