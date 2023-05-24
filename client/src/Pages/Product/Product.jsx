import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://www.melty.fr/wp-content/uploads/meltyfr/2022/06/rebeu.deter_123141146_1073852653028928_9084693810345205607_n.jpg",
    "https://www.melty.fr/wp-content/uploads/meltyfr/2022/06/rebeu.deter_123141146_1073852653028928_9084693810345205607_n.jpg",
  ];


  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, maiores dolorum. Neque sint nam atque consequatur eligendi enim necessitatibus omnis, accusantium, fuga delectus quae libero rem harum minus? Repellat, ducimus?</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className='info'>
          <span>Marque: Paul Reed Smith</span>
          <span>Modèle: Custom</span>
        </div>
        <div className='line'>
          <hr />
        </div>
        <div className="info">
          <span>DESCRIPTION</span>
          <div className='line'>
            <hr />
          </div>
          <span>Informations supplémentaires</span>
        </div>
      </div>
    </div>
  )
}

export default Product