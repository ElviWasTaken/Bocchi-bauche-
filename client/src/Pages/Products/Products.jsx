import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Products.scss"
import List from '../../component/List/List'
import useFetch from '../../hooks/useFetch'

export const Products = () => {


  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(3000)
  const [sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const { data, loading, error } = useFetch(`sub-categories?[filters][categories][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor="1">{item.attributes.title}</label>
            </div>
          ))}

        </div>
        <div className="filterItem">
          <h2>Filtrer par prix</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={3000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filtrer par ordre</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")} />
            <label htmlFor="asc">Prix (du moins cher au plus cher)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")} />
            <label htmlFor="asc">Prix (du plus cher au moins cher)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC1nYWxsZXJ5LTEtMjAyMi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgyLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifSwic2hhcnBlbiI6dHJ1ZX19"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products