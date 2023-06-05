import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'


export const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.attributes?.img?.data.attributes.url} alt=""></img>
        </div>
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.oldPrice || item?.attributes.price + 500}</h3>
        <h3>${item?.attributes.price}</h3>
      </div>
    </Link>
  )
}

export default Card