import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./Cart.scss"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { resetCart } from '../../redux/cartReducer';
import { removeItem } from '../../redux/cartReducer';

const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0
        products.forEach(item => total += item.quantity * item.price)
        return total.toFixed(2)
    }
    return (
        <div className="cart">
            <h1>Produits dans votre panier</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} x {item.price}€
                        </div>
                    </div>
                    <DeleteOutlineOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SOMME TOTALE</span>
                <span>{totalPrice()}€</span>
            </div>
            <button>PROCÉDER AU PAIEMENT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Vider le Panier</span>
        </div>
    )
}

export default Cart