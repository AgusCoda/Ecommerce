import { useState } from "react";
import "./styles.css";

const Add = () => {
  const [add, setAdd] = useState(0);

  const cartAdd = () => {
    if(add === 3) {
      return;
    }
    setAdd(add + 1);
  }
  
  const cartRemove = () => {
    if(add === 0) {
      return;
    }
    setAdd(add - 1);
  }

  return (
    <div  className="add_detail">
      <div className="add_detail_div">
        <h3 onClick={cartRemove}>-</h3>
        <h4>{add}</h4>
        <h3 onClick={cartAdd}>+</h3>
      </div>
      <button>Agregar al carrito</button>
    </div>    
  )
}

export default Add;