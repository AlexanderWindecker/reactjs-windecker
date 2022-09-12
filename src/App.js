
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Products/ItemListContainer';



function App() {
  return (
    <div className="App">
     
     <NavBar />
     <ItemListContainer greeting="Mi productos"/>
    </div>
  );
}

export default App;
