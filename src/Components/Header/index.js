import React from 'react';
import "./header.scss"
import BurgerLogo from '../../assets/icons/Qr_Code.svg'
import Circle from '../../assets/icons/circle.svg'
import Notification from '../../assets/icons/Bell.svg'
import Location from '../../assets/icons/Map_Pin.svg'
import Thunder from '../../assets/icons/electricity-thunder-svgrepo-com 1.svg'
import Star from '../../assets/icons/Star.svg'
import arrow from '../../assets/icons/arrowDown.svg'
import {NavLink} from "react-router-dom";

const Index = () => {
    return (
        <header className="header">
            <div className="header__left">
                <img className="header__burger" src={BurgerLogo} alt=""/>
                <img src={Circle} alt="circle"/>
                <h2 className="header__title">Mr.Tour</h2>
            </div>
            <div className="header__right">
                <div className="header__navbar">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/destination">Destinations</NavLink>
                    <NavLink to="/tour">Tours</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>
                <div className="header__notifications">
                    <img src={Location} alt=""/>
                    <img src={Notification} alt=""/>
                </div>
                <div className="header__profile">
                   <div className="header__profile_icons">
                       <img src={Star} alt=""/>
                       <div className="header__profile_thunder">
                           <div className="border">
                               <img src={Thunder} alt=""/>
                           </div>
                       </div>

                   </div>
                    <div className="header__profile_user">
                        <img src="https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg" alt=""/>
                        <img className="arrow" src={arrow} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Index;