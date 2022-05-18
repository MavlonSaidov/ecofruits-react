import React, { useEffect, useState } from "react";
import "./Hero.scss";
import heroData from "./HeroData";

function Hero() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const lastIndex = heroData.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, heroData]);

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
            {heroData.map((person, personIndex) => {
                const { id, img } = person;

                let position = "nextSlide";
                if (personIndex === index) {
                    position = "activeSlide";
                }
                if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === heroData.length - 1)
                ) {
                    position = "lastSlide";
                }

                return (
                    <div className="hero__inner">
                        <div className={`hero__image ${position}`} key={id}>
                            <img src={img} alt="hero-background" />
                        </div>
                        <div className="hero__info">
                            <h1 className="hero__title">
                                <div>E</div>
                                <div>c</div>
                                <div>o</div>
                                <div className="space"></div>
                                <div>F</div>
                                <div>r</div>
                                <div>u</div>
                                <div>i</div>
                                <div>t</div>
                                <div>s</div>
                            </h1>
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
