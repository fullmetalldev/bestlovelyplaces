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
        <div className="home">
            <img className="first" src={first} alt=""/>
            <img className="second" src={second} alt=""/>
            <div className="home__title animate__animated animate__zoomIn">
                <span><span className="light">Discover</span> the</span>
                <span>Best Lovely Places</span>
            </div>
            <div className="home__benefits">
                {
                    cards.map((item) => (
                        <BenefitCard info={item.info} title={item.title} image={item.image}/>
                    ))
                }
                <div className="home__subtitle animate__animated animate__slideInRight">
                    <h3 className="home__subtitle_text">
                        Plan and book your perfect trip with expert advice , travel, tips,
                        destination information and inspiration from us.
                    </h3>
                </div>
            </div>
            <div className="home__tips">
                <div className="colors">
                    <div className="card blue">
                        <h2>Top values
                        <br/>
                            for you
                        </h2>
                        <img src={line} alt=""/>
                    </div>
                    <div className="card orange">
                        <h2>Healthy daily life</h2>
                        <span>We make quality-driven, ethical <br/>
                        and mindful per products
                        </span>
                        <img src={line} alt=""/>
                    </div>
                    <div className="card grey">
                        <h2> Place to discover</h2>
                        <span>We make quality-driven, ethical <br/>
                        and mindful per products
                        </span>
                        <img src={line} alt=""/>
                    </div>
                    <div className="card green">
                        <h2> Get motivated</h2>
                        <span>We make quality-driven, ethical <br/>
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