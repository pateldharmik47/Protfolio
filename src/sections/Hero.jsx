import React from "react"
import { words } from "../constants/index"
import Button from "../components/Button";

const Hero = (props) => {

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img loding="lazy" src="/images/bg.png" alt="background" />
            </div>
            <div className="hero-layout">
                {/* LEFT : Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img loading="lazy" src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I’m Dharmik, a developer based in India with a passion for code.
                        </p>
                        <Button className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my work"
                        />
                    </div>
                </header>
                {/* Right : 3D Model */}
            </div>
        </section>
    )
};

export default Hero;
