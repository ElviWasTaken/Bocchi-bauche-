import React from 'react'
import "./Contact.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

export const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>CONTACTEZ-NOUS !</span>
            <div className="mail">
                <input type="text" placeholder='Entrez votre email...' />
                <button>JOIN US</button>
            </div>
            <div className="icon">
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <GoogleIcon/>
            </div>
        </div>
    </div>
  )
}


export default Contact