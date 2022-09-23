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
                <img className="header__burger animate__animated"
                     onMouseLeave={(e) =>
                         e.currentTarget.classList.add('animate__headShake')
                     } onMouseOver={(e) => {
                    e.currentTarget.classList.remove('animate__headShake')
                }}
                     src={BurgerLogo} alt=""/>
                <img className="animate__animated"
                     onMouseLeave={(e) =>
                         e.currentTarget.classList.add('animate__headShake')
                     } onMouseOver={(e) => {
                    e.currentTarget.classList.remove('animate__headShake')
                }}
                     src={Circle} alt="circle"/>
                <h2
                    onMouseLeave={(e) =>
                        e.currentTarget.classList.add('animate__headShake')
                    } onMouseOver={(e) => {
                    e.currentTarget.classList.remove('animate__headShake')
                }}
                    className="header__title animate__animated">Mr.Tour</h2>
            </div>
            <div className="header__right">
                <div className="header__navbar">
                    <NavLink
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="animate__animated" to="/home">Home</NavLink>
                    <NavLink
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="animate__animated" to="/about">About</NavLink>
                    <NavLink
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="animate__animated" to="/destination">Destinations</NavLink>
                    <NavLink
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="animate__animated" to="/tour">Tours</NavLink>
                    <NavLink
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="animate__animated" to="/blog">Blog</NavLink>
                </div>
                <div className="header__notifications">
                    <img
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="animate__animated" src={Location} alt=""/>
                    <img
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="animate__animated" src={Notification} alt=""/>
                </div>
                <div className="header__profile">
                   <div
                       onMouseLeave={(e) =>
                           e.currentTarget.classList.add('animate__headShake')
                       } onMouseOver={(e) => {
                       e.currentTarget.classList.remove('animate__headShake')
                   }}
                       className="header__profile_icons animate__animated">
                       <img
                           onMouseLeave={(e) =>
                               e.currentTarget.classList.add('animate__headShake')
                           } onMouseOver={(e) => {
                           e.currentTarget.classList.remove('animate__headShake')
                       }}
                           className="animate__animated" src={Star} alt=""/>
                       <div
                           onMouseLeave={(e) =>
                               e.currentTarget.classList.add('animate__headShake')
                           } onMouseOver={(e) => {
                           e.currentTarget.classList.remove('animate__headShake')
                       }}
                           className="header__profile_thunder animate__animated">
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