import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <section id="about" className="cardsSection">
      <h2>Our Popular Dishes</h2>

      <div className="cardsContainer">

        <div className="foodCard">
          <img src="/images/biryani.jpg" alt="biryani" />
          <h3>Classic Biryani</h3>
          <p>Fresh and delicious beef biryani with taste.</p>
          <span>$8.99</span>
        </div>

        <div className="foodCard">
          <img src="/images/pizza.jpg" alt="Pizza" />
          <h3>Cheese Pizza</h3>
          <p>Delicious pizza topped with fresh cheese.</p>
          <span>$12.99</span>
        </div>

        <div className="foodCard">
          <img src="/images/bbq.jpg" alt="BBQ" />
          <h3>BBQ Platter</h3>
          <p>Juicy BBQ with amazing flavors.</p>
          <span>$15.99</span>
        </div>

      </div>
    </section>
  );
};

export default Cards;
