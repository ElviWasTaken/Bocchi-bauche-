import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link, NavLink } from "react-router-dom"
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from "react-redux"

export const Navbar = () => {

  const [open,SetOpen] = useState(false)
  const products = useSelector(state => state.cart.products)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="name">
            <Link className="link" to="/">Bocchi</Link>
          </div>
        </div>
        <div className="center">
          <div className="icon">
            <SearchIcon />
          </div>
        </div>
        <div className="right">
          <div className="cartIcon" onClick={()=>SetOpen(!open)}>
            <ShoppingCartIcon />
            <span>{products.lenght}</span>
          </div>
          <div className="user">
            <PersonIcon />
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
}
