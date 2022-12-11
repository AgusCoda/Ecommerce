import "./styles.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({productoDetail}) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(productoDetail, quantity)
  };
  
    return (
        <div className="container_detail">
          <img src={`/images/${productoDetail.imagen}.png`} alt={productoDetail.nombre} />
          <div className="desc_detail">
            <div className="marca_detail">
              <h1>{productoDetail.nombre}</h1>
              <p>{productoDetail.marca}</p>
            </div>
            <h2>Descripcion del producto:</h2>
            <h2>Estilo: {productoDetail.estilo}</h2>
            <h2>Materiales del exterior: {productoDetail.materialExterior}</h2>
            <h2>Tipo de ajuste: {productoDetail.tipoAjuste}</h2>
            <h2>Deportes recomendados: {productoDetail.deporteRecomendado}</h2>
            <h2>Materiales de la suela: {productoDetail.materialSuela}</h2>
            <h2>{productoDetail.precio}</h2>
            <div>
            {goToCart ? (
						  <Link to="/cart"> Terminar al carrito</Link>
					) : (
						<ItemCount initial = {3} stock = {5} onAdd={onAdd} />
					)}
            </div>
          </div>
        </div>
    )
}
  
export default ItemDetail;

// const ItemDetail = ({productoDetail}) => {
//   const [count, setCount] = useState(0);
//     return (
//         <div className="container_detail">
//           <img src={`/images/${productoDetail.imagen}.png`} alt={productoDetail.nombre} />
//           <div className="desc_detail">
//             <div className="marca_detail">
//               <h1>{productoDetail.nombre}</h1>
//               <p>{productoDetail.marca}</p>
//             </div>
//             <h2>Descripcion del producto:</h2>
//             <h2>Estilo: {productoDetail.estilo}</h2>
//             <h2>Materiales del exterior: {productoDetail.materialExterior}</h2>
//             <h2>Tipo de ajuste: {productoDetail.tipoAjuste}</h2>
//             <h2>Deportes recomendados: {productoDetail.deporteRecomendado}</h2>
//             <h2>Materiales de la suela: {productoDetail.materialSuela}</h2>
//             <h2>{productoDetail.precio}</h2>
//             <div>
//               <h3>{count}</h3>
//               <ItemCount setCount={setCount}/>
//             </div>
//           </div>
//         </div>