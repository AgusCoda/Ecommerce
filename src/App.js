import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer nombre = "Agustin Hernan" apellido = "Codarini" />
    </div>
  );
};

export default App;