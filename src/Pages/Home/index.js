import React from 'react';
import './home.scss';
import Gift from '../svg/Gift.svg';
import Time from '../svg/Alarm.svg';
import House from '../svg/House_01.svg';
import line from '../svg/line.svg';
import first from '../svg/HomeFirst.svg';
import second from '../svg/HomeSecond.svg';
import BenefitCard from "../../Components/Benefits/BenefitCard";

const Index = () => {

    const cards = [
        {title: '725+', info: "Happy customer", image: House},
        {title: '29', info: "Awards Gained", image: Gift},
        {title: '12', info: "Years experience", image: Time},
    ]

    return (
        <div className="home animate__animated animate__bounceInDown">
            <img className="first" src={first} alt=""/>
            <img className="second" src={second} alt=""/>
            <div className="home__title animate__animated">
                <span
                className="animate__animated"
                onMouseLeave={(e) =>
                    e.currentTarget.classList.add('animate__headShake')
                } onMouseOver={(e) => {
                    e.currentTarget.classList.remove('animate__headShake')
                }}
                ><span className="light">Discover</span> the</span>
                <span className="animate__animated"
                      onMouseLeave={(e) =>
                          e.currentTarget.classList.add('animate__headShake')
                      } onMouseOver={(e) => {
                    e.currentTarget.classList.remove('animate__headShake')
                }}
                >Best Lovely Places</span>
            </div>
            <div className="home__benefits">
                {
                    cards.map((item) => (
                        <BenefitCard info={item.info} title={item.title} image={item.image}/>
                    ))
                }
                <div className="home__subtitle animate__animated">
                    <h3
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                        e.currentTarget.classList.remove('animate__headShake')
                    }}
                        className="home__subtitle_text animate__animated">
                        Plan and book your perfect trip with expert advice , travel, tips,
                        destination information and inspiration from us.
                    </h3>
                </div>
            </div>
            <div className="home__tips animate__animated animate__backInLeft">
                <div className="colors">
                    <div className="card blue">
                        <h2 className="animate__animated"
                            onMouseLeave={(e) =>
                                e.currentTarget.classList.add('animate__headShake')
                            } onMouseOver={(e) => {
                            e.currentTarget.classList.remove('animate__headShake')
                        }}
                        >Top values
                        <br/>
                            for you
                        </h2>
                        <img src={line} alt=""/>
                    </div>
                    <div className="card orange a">
                        <h2 className="animate__animated"
                            onMouseLeave={(e) =>
                                e.currentTarget.classList.add('animate__headShake')
                            } onMouseOver={(e) => {
                            e.currentTarget.classList.remove('animate__headShake')
                        }}
                        >Healthy daily life</h2>
                        <span
                        className="animate__animated"
                        onMouseLeave={(e) =>
                            e.currentTarget.classList.add('animate__headShake')
                        } onMouseOver={(e) => {
                            e.currentTarget.classList.remove('animate__headShake')
                        }}
                        >We make quality-driven, ethical <br/>
                        and mindful per products
                        </span>
                        <img src={line} alt=""/>
                    </div>
                    <div className="card grey">
                        <h2 className="animate__animated"
                            onMouseLeave={(e) =>
                                e.currentTarget.classList.add('animate__headShake')
                            } onMouseOver={(e) => {
                            e.currentTarget.classList.remove('animate__headShake')
                        }}
                        > Place to discover</h2>
                        <span className="animate__animated"
                              onMouseLeave={(e) =>
                                  e.currentTarget.classList.add('animate__headShake')
                              } onMouseOver={(e) => {
                            e.currentTarget.classList.remove('animate__headShake')
                        }}
                        >We make quality-driven, ethical <br/>
                        and mindful per products
                        </span>
                        <img src={line} alt=""/>
                    </div>
                    <div className="card green">
                        <h2 className="animate__animated"
                            onMouseLeave={(e) =>
                                e.currentTarget.classList.add('animate__headShake')
                            } onMouseOver={(e) => {
                            e.currentTarget.classList.remove('animate__headShake')
                        }}
                        > Get motivated</h2>
                        <span className="animate__animated"
                              onMouseLeave={(e) =>
                                  e.currentTarget.classList.add('animate__headShake')
                              } onMouseOver={(e) => {
                            e.currentTarget.classList.remove('animate__headShake')
                        }}
                        >We make quality-driven, ethical <br/>
                        and mindful per products
                        </span>
                        <img src={line} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;