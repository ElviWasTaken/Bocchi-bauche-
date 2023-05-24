import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link, NavLink } from "react-router-dom"
import "./Navbar.scss"
import Cart from '../Cart/Cart';

export const Navbar = () => {
  const [open,SetOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div class="name">
            <Link className="link" to="/">Bocchi</Link>
          </div>
        </div>
        <div className="center">
          <div class="icon">
            <SearchIcon />
          </div>
        </div>
        <div className="right">
          <div class="cartIcon" onClick={()=>SetOpen(!open)}>
            <ShoppingCartIcon />
            <span>0</span>
          </div>
          <div class="user">
            <PersonIcon />
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
}