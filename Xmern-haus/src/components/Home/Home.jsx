import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Mern Pizza Haus</h1>
      </div>
      <div className="menu-container">
        <div className='menu-link-container'>
        <Link to='/Pizza' className="menu-item">
          <div className="menu-text">
            <h2>Menu</h2>
            <p>Indulge in a symphony of flavors with our meticulously crafted pizza menu. From classic Margheritas to bold and innovative specialty pies, each slice is a celebration of quality ingredients, artisanal craftsmanship, and a passion for perfecting the art of pizza-making. Explore our diverse menu, where every topping, sauce, and crust is a carefully curated delight, promising an unforgettable culinary journey with every bite. Elevate your pizza experience with our signature creations that redefine traditional favorites or savor the familiarity of time-tested classics. Welcome to a world where passion meets palate, and each pizza is a masterpiece waiting to be savored.</p>
          </div>
          <div className="menu-image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f0a575f2b3bb20c7584bc42/1675659810793-BBGKD1MQMFFMWX55IS3B/PizzaPasta_LeighGriffiths-39+hero-banner.jpg?format=2500w"
              alt="Pizza"
              className="circular-image"
            />
          </div>
        </Link>
        <Link to='/CYOP' className="menu-item">
          <div className="menu-image">
            <img
              src="https://cdn.tgdd.vn/2021/09/CookDish/cach-bao-quan-pizza-de-banh-pizza-va-cach-ham-nong-banh-pizza-avt-1200x676.jpg"
              alt="Pizza"
              className="circular-image"
            />
          </div>
          <div className="menu-text">
            <h2>Create Your Own Pizza - CYOP</h2>
            <p>Craft your perfect pizza with our Create Your Own option! Start with fresh dough, choose from a variety of premium sauces, and customize with your favorite toppings. Whether you prefer classic or adventurous, thin or thick crust, the power to create is yours. At Mern Pizza Haus, every pizza is a unique masterpiece reflecting your taste and style.</p>
          </div>
        </Link>
        </div>
          <div className="about-us-container">
            <div className="about-us-text">
              <h2>About Us</h2>
              <p>Welcome to Mern Pizza Haus, where passion for pizza meets culinary excellence. Our story began in the heart of Italy, where our founder, Antonio, learned the art of crafting perfect pizza from his grandmother's secret recipe.

Over the years, Mern Pizza Haus has grown into a beloved pizzeria known for its commitment to quality ingredients and traditional techniques. Every pizza we serve is a piece of Italy on your plate, a tribute to the rich heritage of authentic Italian pizza-making.

We take pride in using the finest, freshest ingredients to create the most flavorful combinations. From our handcrafted dough to our savory sauces, every bite is a journey through Italy's flavors.

Whether you dine in, take out, or order for delivery, we are dedicated to bringing the joy of a true Italian pizza experience to your doorstep. Come, be a part of our delicious story, and savor the taste of tradition at Mern Pizza Haus.

Grazie mille for choosing us!</p>
            </div>
            <div className="about-us-image">
              <img src="/lamp.jpg" alt="Mern Pizza Haus" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
