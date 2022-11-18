import "./styles.css";
import { useEffect, useState } from "react";
import products from "../products/Products"
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const categoryName = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryName) {
        const filteredData = products.filter((items) => {
          return items.marca === categoryName;
        });
        resolve(filteredData);
      } else {
        resolve(products);
      }
    }, 1000);
  });
  useEffect(() => {
    getProducts
    .then((respuesta) => {
      setProductList(respuesta);
    });
    // eslint-disable-next-line
  }, [categoryName]);
  
  return (
    <div className="fondo">
      <ItemList productList={productList} />
    </div>
  )
};

export default ItemListContainer;