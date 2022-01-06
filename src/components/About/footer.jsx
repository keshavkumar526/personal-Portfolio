import React from 'react'
import insta from "../../img/instagramm.png"
import github from "../../img/github.png"
import linkedIn from "../../img/linkin.png"
import codeShef from "../../img/codeshef.png"

export default function Footer() {
    return (
        <div className='footerC'>
            <div className="contactFooter">
             <a href="https://github.com/keshavkumar526">
                 <img className='footerIcon' src={github} alt="" />
             </a>
             <a href="https://www.linkedin.com/in/keshav-kumar-340396207/">
                 <img className='footerLIcon' src={linkedIn} alt="" />
             </a>
             <a href="https://www.instagram.com/keshav_2647/">
                 <img className='footerIIcon' src={insta} alt="" />
             </a>
             <a href="https://www.codechef.com/users/keshav111kumar">
                 <img className='footerCIcon' src={codeShef} alt="" />
             </a>
            </div>
            <p className='footerP'>Copyright © 2021 programmer Keshav Kumar Jha. All Rights Reserved.</p>
        </div>
    )
}
