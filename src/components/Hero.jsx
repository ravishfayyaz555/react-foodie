import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="heroContent">
        <h1>Delicious Food, Delivered Fresh!</h1>

        <p>
          Enjoy the taste of fresh and delicious food.
          We bring your favorite meals right to your door.
        </p>

        <a href="#contact" className="heroBtn">
          Order Now
        </a>
      </div>

      <div className="heroImage">
        <img src="/images/burger.avif" alt="burger" />
      </div>
    </section>
  );
};

export default Hero;
