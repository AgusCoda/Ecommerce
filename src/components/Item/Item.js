const Item = ({producto}) => {
  return (
      <div className="card">
        <img src={`images/${producto.imagen}.png`} alt={producto.nombre} />
        <div className="card_description">
          <h3>{producto.marca}</h3>
          <div className="card_price">
            <h2>{producto.nombre}</h2>
            <p>{producto.precio}</p>
          </div>
          <button className="add">Ver detalle</button>
        </div>
      </div>
  )
}

export default Item;