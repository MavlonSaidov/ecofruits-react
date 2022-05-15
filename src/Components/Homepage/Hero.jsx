import React, { useEffect, useState } from "react";
import "./Hero.scss";
import hero1 from "./hero-images/hero.png";
import hero2 from "./hero-images/hero2.jpg";
import hero3 from "./hero-images/hero4.png";

function Hero() {
    const data = [
        {
            id: 1,
            img: hero1,
        },
        {
            id: 2,
            img: hero2,
        },
        {
            id: 3,
            img: hero3,
        },
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, data]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <div className="hero">
            {data.map((person, personIndex) => {
                const { id, img } = person;

                let position = "nextSlide";
                if (personIndex === index) {
                    position = "activeSlide";
                }
                if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === data.length - 1)
                ) {
                    position = "lastSlide";
                }

                return (
                    <div className="hero__inner">
                        <div className={`hero__image ${position}`} key={id}>
                            <img src={img} alt="hero-background" />
                        </div>
                        <div className="hero__info">
                            <h1 className="hero__title">Eco Fruit</h1>
                            <p className="hero__subtitle">
                                из Узбекистана с любовью
                            </p>
                        </div>
                        <div className="hero__dots">
                            <span
                                onClick={(e) => setIndex(0)}
                                className={index === 0 && "redspan"}
                            ></span>
                            <span
                                onClick={(e) => setIndex(1)}
                                className={index === 1 && "redspan"}
                            ></span>
                            <span
                                onClick={(e) => setIndex(2)}
                                className={index === 2 && "redspan"}
                            ></span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Hero;
