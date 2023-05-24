import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Products.scss"
import List from '../../component/List/List'

export const Products = () => {


  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(3000)
  const [sort, setSort] = useState(null)
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1}/>
            <label htmlFor="1">Fender</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2}/>
            <label htmlFor="2">PRS</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3}/>
            <label htmlFor="3">Ibanez</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={3000} onChage={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (du moins cher au plus cher)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (du plus cher au moins cher)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC1nYWxsZXJ5LTEtMjAyMi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgyLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifSwic2hhcnBlbiI6dHJ1ZX19"
          alt=""
          />
          <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products