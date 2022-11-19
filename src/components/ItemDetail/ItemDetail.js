import "./styles.css";
import ItemCount from "../ItemCount/Add";

const ItemDetail = ({productoDetail}) => {
    return (
        <div className="container_detail">
          <img src={`images/${productoDetail.imagen}.png`} alt={productoDetail.nombre} />
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
              <ItemCount />
            </div>
          </div>
        </div>
    )
}
  
export default ItemDetail;