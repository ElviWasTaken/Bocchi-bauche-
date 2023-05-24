import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./Cart.scss"
const Cart = () => {

    const data =[
        {
            id: 1,
            img: "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC0yMDIyLXZlcnRpY2FsLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NjAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0IjoxODUyLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
            title: "PRS Custom 24",
            desc: "Description",
            oldPrice: 2000,
            price: 1500,
        },
        {
            id: 2,
            img: "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC0yMDIyLXZlcnRpY2FsLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NjAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0IjoxODUyLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
            title: "PRS Custom 24",
            desc: "Description",
            oldPrice: 2000,
            price: 1500,
        },
    ]

    return (
        <div className="cart">
            <h1>Produits dans votre panier</h1>
            {data?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt=""/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">1 x {item.price}€</div>
                    </div>
                    <DeleteOutlineOutlinedIcon className='delete'/>
                </div>
            ))}
            <div className="total">
                <span>SOMME TOTALE</span>
                <span>123€</span>
            </div>
            <button>PROCÉDER AU PAIEMENT</button>
            <span className="reset">Vider le Panier</span>
        </div>
    )
}

export default Cart