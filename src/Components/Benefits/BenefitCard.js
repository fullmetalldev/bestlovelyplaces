import React from 'react';
import "./benefits.scss"


const BenefitCard = ({title, info, image}) => {


    return (
        <div
            onMouseLeave={(e) =>
                e.currentTarget.classList.add('animate__headShake')
            } onMouseOver={(e) => {
            e.currentTarget.classList.remove('animate__headShake')
        }}

            className="benefitCard animate__animated">
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