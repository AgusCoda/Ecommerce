import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        {/* <Route path="/marca/:categoryName" element={<ItemListContainer />} /> */}
        {/* <Route path="detail/:id" element={<ItemDetailContainer />} /> */ }
        {/* <Route path="cart" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;