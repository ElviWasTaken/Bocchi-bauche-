import React from "react";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"
import { useState } from "react";

export const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0);
const [currentColor, setCurrentColor] = useState("rgb(0, 0, 0)");

    const data =[
        "https://wallpaperboat.com/wp-content/uploads/2019/04/fender-guitar-027.jpg",
        "https://wallpaperboat.com/wp-content/uploads/2019/04/fender-guitar-029.jpg",
        "https://wallpaperboat.com/wp-content/uploads/2019/04/fender-guitar-036.jpg",
        "https://stuff.fendergarage.com/images/7/h/L/Web_Fender_0411_23_NPI_CuNiFe_Pickups_Launch_HPS_FINAL_DESKTOP.jpg",
        "https://stuff.fendergarage.com/images/l/S/W/Web_Other_Mod_Shop_-_11_Shop_Cards__des5_1x-3@2x.jpg",
        "https://stuff.fendergarage.com/images/T/w/e/Fender_eComm_ShopCard_NewReleases_squier_sonic@2x.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/11/Guitar-fender-stratocaster-music-images-hq.jpg",
    ];


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
        setCurrentColor(currentSlide === 2 ? "#999" : "rgb(0, 0, 0)" )
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
        setCurrentColor(currentSlide === 0 ? "#999" : "rgb(0, 0, 0)" )
    };



    return(
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100.4}vw)` }}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon className="arrow" style={{color: currentColor }} />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon className="arrow"/>
                </div>
            </div>
        </div>
    )
}


export default Slider