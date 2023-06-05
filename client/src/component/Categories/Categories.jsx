import React from 'react'
import "./Categories.scss"
import { Link } from "react-router-dom"

export const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img className="blue" src="https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL3NlLWN1c3RvbS0yNC0yMDIxLWdhbGxlcnktNS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgyLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifSwic2hhcnBlbiI6dHJ1ZX19" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Paul Reed Smith
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://cdn.shopify.com/s/files/1/0255/8659/7968/articles/Fender_Stratocaster_Header_4_2500x.png?v=1603912628" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Fender
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img className="blue" src="https://guitar.com/wp-content/uploads/2022/01/Ibanez-AZES40-1@1400x1050.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Ibanez
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img className="blue" src="https://media.suhr.com/wp-content/uploads/2021/10/13162346/ModernPurple5-1.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    SUHR
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img className="blue" src="https://images.ctfassets.net/m8onsx4mm13s/xrCeM4kvY88a6HMbwsf3b/e65a2b50378cfba8e6b558dde4252f47/LPS5F00FHNH1_lifestyle3.png" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    Gibson
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img className="large" src="https://www.stars-music.fr/medias/esp/custom-shop-james-hetfield-snakebyte-japon-signature-hh-emg-eb-hd-2-144236.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            ESP
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Categories