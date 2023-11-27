import { useState } from "react";
import Filters from "./components/Filters";
import SearchInput from "./components/SearchInput";
import ProductCard from "./components/ProductsCard";
import ShowMoreIcon from "./assets/show-more-icon.png";
import productsObject from "./components/productsObject";
import "./App.css";

function App() {
  const [products, setProducts] = useState(productsObject);

  return (
    <>
      <h1>Wybierz urządzenie</h1>
      <div className="main-container">
        <SearchInput products={products} setProducts={setProducts} />
        <Filters products={products} setProducts={setProducts} />
        <div className="counter">Liczba wyników: {products.length}</div>
        <ProductCard array={products} />
        <div className="show-more">
          <span>Pokaż więcej</span>
          <img src={ShowMoreIcon}></img>
        </div>
      </div>
    </>
  );
}

export default App;
