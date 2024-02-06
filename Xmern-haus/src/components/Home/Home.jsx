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
        <div className='menu-link-container'>
        <Link to='/Pizza' className="menu-item">
        <div className="menu-image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f0a575f2b3bb20c7584bc42/1675659810793-BBGKD1MQMFFMWX55IS3B/PizzaPasta_LeighGriffiths-39+hero-banner.jpg?format=2500w"
              alt="Pizza"
              className="circular-image"
            />
          </div>
          <div className="menu-text">
            <h2>Menu</h2>
            <p>Savor a symphony of flavors at Mern Pizza Haus, where every slice is a celebration of quality ingredients and artisanal craftsmanship. From classic Margheritas to innovative specialty pies, our diverse menu promises an unforgettable culinary journey.</p>
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
            <p>Unleash your creativity at Mern Pizza Haus with our Create Your Own option! Start with fresh dough, choose premium sauces, and customize with favorite toppings. Whether you crave classic or adventurous, thin or thick crust, the power to create your unique masterpiece is in your hands.</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
