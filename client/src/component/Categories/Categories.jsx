import React from 'react'
import "./Categories.scss"
import { Link } from "react-router-dom"

export const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img className="blue" src="https://www.fmicassets.com/Damroot/LgJpg/10006/0144503573_fen_ins_fbd_1_nr.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://www.fmicassets.com/Damroot/LgJpg/10006/0144503573_fen_ins_fbd_1_nr.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img className="blue" src="https://www.fmicassets.com/Damroot/LgJpg/10006/0144503573_fen_ins_cbr_1_nr.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img className="blue" src="https://www.fmicassets.com/Damroot/LgJpg/10006/0144503573_fen_ins_fbd_1_nr.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    Sale
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img className="blue" src="https://www.fmicassets.com/Damroot/LgJpg/10006/0144503573_fen_ins_fbd_1_nr.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    Sale
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img className="large" src="https://www.fmicassets.com/Damroot/LgJpg/10006/0144503573_fen_ins_fbd_1_nr.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Categories