import "./styles.css";
import { useEffect, useState } from "react";
import productsDetail from "../productsDetail/productsDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productoDetail, setProductoDetail] = useState();
    const { id } = useParams();

    const getData = () => {
        const productFiltered = productsDetail.filter((producto) => {
            return producto.id == id;
        });
        setProductoDetail(productFiltered);
    };

    useEffect(() => {
        getData();
    }, [id])
    return (
    <div className="fondo_detail">
        {productoDetail && <ItemDetail productoDetail={productoDetail} />}
    </div>
  )
}

export default ItemDetailContainer;