import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../global'
import axios from 'axios'
import './Cart.css'

const Cart = () => {
  let userId = '654ce855019badf387ee03a2'
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState({ cart: { current_order: [] } })
  const [quantity, setQuantity] = useState({})

  const toggleCart = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const getItems = async () => {
      if (menuOpen) {
        try {
          const response = await axios.get(`${BASE_URL}users/${userId}`)
          setCartItems(response.data)
          console.log(response.data)
        } catch (error) {
          console.error('Error grabbing cart items', error)
        }
      }
    }
    getItems()
  }, [menuOpen])

  //remove and update qty functions
  const updateQuantity = (itemId, newQuantity) => {
    // setQuantity({quantity, [itemId]: newQuantity})
    setQuantity({ ...quantity, [itemId]: newQuantity})
  }
  const removeItem = (itemId) => {
    setCartItems([itemId._id] || - 1 )
  }

  return (
    <div className={`cart-overlay-container ${menuOpen ? 'open' : ''}`}>
      <div className="cart-wrapper">
        <div className="arrow" onClick={toggleCart}>
          Cart
        </div>
        {menuOpen && (
          <div className="menu">
            <ul>
              {cartItems.cart.current_order.map((currentOrder, key) => (
                <li key={currentOrder._id}>
                  <div className='cyop-cart'>
                    <h4>Custom Pizza</h4>
                    <li>Base Pizza: {currentOrder.custom_pizza[0].base_pizza.name}</li>
                    <li>Toppings: {currentOrder.custom_pizza[0].toppings.map((topping) => topping.name).join(', ')}</li>
                    <li>Cheeses: {currentOrder.custom_pizza[0].cheeses.map((cheese) => cheese.name).join(', ')}</li>
                  </div>
                  <div className='sig-cart'>
                    <h4>Signature Pizza</h4>
                    <li>Menu Item: {currentOrder.menu_item[0].name}</li>
                    <li>Toppings: {currentOrder.menu_item[0].toppings.map((topping) => topping.name).join(', ')}</li>
                  </div>
                    <input
                      type='number'
                      value={quantity[currentOrder._id] || 1}
                      onChange={(e) => updateQuantity(currentOrder._id, e.target.value)}
                      />
                  <div className='cart-btn-container'>
                    <button onClick={() => updateQuantity(currentOrder._id, quantity[currentOrder._id])}> Update Qty.</button>
                    <button onClick={() => removeItem(currentOrder._id)}>Remove</button>
                  </div>
                  <div className='order-cart'>
                    <li><strong>Total Price:</strong> {currentOrder.total_price}</li>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

