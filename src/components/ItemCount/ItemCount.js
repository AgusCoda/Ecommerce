import { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
    };

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);
  return (
    <div  className="add_detail">
      <div className="add_detail_div">
        <h3 disabled={count <= 1} onClick= {decrease}>
            -
        </h3>
        <h3 disabled={count >= stock} onClick= {increase}>
            +
        </h3>
      </div>
      <button disabled={stock <= 0} onClick= {() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount;