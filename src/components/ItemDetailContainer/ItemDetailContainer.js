import "./styles.css";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", detalleId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detalleId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;

// const ItemDetailContainer = () => {
//     const [productoDetail, setProductoDetail] = useState();
//     const { id } = useParams();

//     const getData = () => {
//         const productFiltered = productsDetail.find((producto) => {
//             return producto.id == id;
//         });
//         setProductoDetail(productFiltered);
//     };

//     useEffect(() => {
//         getData();
//     }, [id])
//     return (
//     <div className="fondo_detail">
//         {productoDetail && <ItemDetail productoDetail={productoDetail} />}
//     </div>
//   )
// }