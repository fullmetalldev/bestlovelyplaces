import React from 'react';
import "./benefits.scss"


const BenefitCard = ({title, info, image}) => {


    return (
        <div onMouseLeave={(e)=>
        e.currentTarget.classList.remove('animate__pulse')
        } onMouseOver={(e) => {
            e.currentTarget.classList.add('animate__pulse')
        }} className="benefitCard animate__animated animate__slideInLeft">
            <div className="benefitCard__img">
                <img src={image} alt=""/>
            </div>
            <div className="benefitCard__text">
                <h2 className="benefitCard__title">
                    {title}
                </h2>
                <span className="benefitCard__info">
                    {info}
                </span>
            </div>
        </div>
    );
};

export default BenefitCard;