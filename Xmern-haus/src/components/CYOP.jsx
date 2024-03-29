//importing libraries and packages
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Spinner,
  ButtonGroup,
} from "reactstrap"
import { BASE_URL } from "../global"

const BASE_PIZZA_COST = 10

export default function CYOP(props) {
  const [toppings, setToppings] = useState(null)
  const [cheeses, setCheeses] = useState(null)
  const [sizeSelected, setSize] = useState(1) //size
  const [toppingsSelected, setToppingsSelected] = useState([])
  const [cheeseSelected, setCheeseSelected] = useState([])
  const [cheesePizza, setCheesePizza] = useState(null)
  const [price, setPrice] = useState(BASE_PIZZA_COST)

  const onCheckboxBtnClick = (selected, type) => {
    if (type === "cheese") {
      const index = cheeseSelected.indexOf(selected)
      if (index < 0) {
        cheeseSelected.push(selected)
      } else {
        cheeseSelected.splice(index, 1)
      }
      console.log(...cheeseSelected)
      setCheeseSelected([...cheeseSelected])
    } else if (type === "topping") {
      const index = toppingsSelected.indexOf(selected)
      if (index < 0) {
        toppingsSelected.push(selected)
      } else {
        toppingsSelected.splice(index, 1)
      }
      console.log(...toppingsSelected)
      setToppingsSelected([...toppingsSelected])
    }
  }

  const fetchUpdatedUserData = async () => {
    try {
      const updatedUserData = await axios.get(
        `${BASE_URL}users/${props.userData._id}`
      )
      console.log("Updated user data:", updatedUserData.data)

      return updatedUserData.data
    } catch (error) {
      console.error("Error fetching updated user data:", error)
      throw error
    }
  }

  const putCart = async () => {
    try {
      const updatedUserData = await fetchUpdatedUserData()
      const currentOrderId = updatedUserData.cart.current_order._id
      console.log(currentOrderId)

      const toppings = [...toppingsSelected]
      const cheeses = [...cheeseSelected]

      const new_custom_pizza = {
        base_pizza: cheesePizza._id,
        toppings: toppings,
        cheeses: cheeses,
      }

      const current_custom_pizzas = (
        await axios.get(`${BASE_URL}orders/${currentOrderId}`)
      ).data.custom_pizza
      console.log(current_custom_pizzas)
      console.log(new_custom_pizza)

      console.log(props.userData)

      const custom_pizza = [...current_custom_pizzas, new_custom_pizza]
      console.log(custom_pizza)

      const body = { custom_pizza: custom_pizza }
      await axios.put(`${BASE_URL}orders/${currentOrderId}`, body)
    } catch (error) {
      console.error("Error adding CYOP to cart", error)
    }
  }

  const addToCart = async () => {
    try {
      let user = props.userData
      await putCart().then(() => {
        props.setUpdateUser(Math.random())
      })
      //Reset selections
      setSize(1)
      setCheeseSelected([])
      setToppingsSelected([])
      setPrice(BASE_PIZZA_COST)
    } catch (error) {
      console.error("Error adding CYOP to cart", error)
    }
  }

  useEffect(() => {
    const getToppingsCheeses = async () => {
      let cheeses = (await axios.get(`${BASE_URL}cheeses`)).data
      let toppings = (await axios.get(`${BASE_URL}toppings`)).data
      let cheesePizza = (await axios.get(`${BASE_URL}menus`)).data[0]

      //   let users = (await axios.get(`${BASE_URL}users`)).data
      console.log(cheeses)
      console.log(toppings)
      setToppings(toppings)
      setCheeses(cheeses)
      setCheesePizza(cheesePizza)
    }
    getToppingsCheeses()
  }, [])

  const calculatePrice = () => {
    let total = BASE_PIZZA_COST
    if (sizeSelected == 2) {
      total += 5
    }
    let toppingsPrice = toppingsSelected.length
    let cheesesPrice = cheeseSelected.length
    setPrice(total + toppingsPrice + cheesesPrice)
  }

  useEffect(() => {
    calculatePrice()
  }, [sizeSelected, toppingsSelected, cheeseSelected])

  return cheeses && toppings ? (
    <div className="CYOP-page">
      <div className="pizza-header-cyop">
        <h1 className="cyop-h1"> Create Your Own Pizza</h1>
      </div>
      <div className="CYOP">
        <div className="leftside">
          <img className="custompizza" src="./PizzaPartyIdeas6.jpg" />
          <h5 className="h5-price">Total Price: $ {price}</h5>
        </div>
        <div className="rightside">
          <div className="h5-container">
            <h5 className="cyop-h5">Sizes</h5>
          </div>

          <div className="buttonGroup">
            <Button
              color="transparent"
              outline
              onClick={() => setSize(1)}
              active={sizeSelected === 1}
            >
              Small
            </Button>
            <Button
              color="transparent"
              outline
              onClick={() => setSize(2)}
              active={sizeSelected === 2}
            >
              Large
            </Button>
          </div>
          <div className="h5-container">
            <h5 className="cyop-h5">Cheeses</h5>
          </div>

          {cheeses ? (
            <div className="buttonGroup">
              {cheeses.map((cheese, i) => (
                <Button
                  className="buttonList"
                  key={cheese._id}
                  color="transparent"
                  outline
                  onClick={() => onCheckboxBtnClick(cheese._id, "cheese")}
                  active={cheeseSelected.includes(cheese._id)}
                >
                  {cheese.name}
                </Button>
              ))}
            </div>
          ) : (
            <Spinner className="m-5" color="primary">
              Loading Cheeses...
            </Spinner>
          )}

          <div className="h5-container">
            <h5 className="cyop-h5">Toppings</h5>
          </div>
          {toppings ? (
            <div className="buttonGroup">
              {toppings.map((topping, i) => (
                <Button
                  className="buttonList"
                  key={topping._id}
                  color="transparent"
                  outline
                  onClick={() => onCheckboxBtnClick(topping._id, "topping")}
                  active={toppingsSelected.includes(topping._id)}
                >
                  {topping.name}
                </Button>
              ))}
            </div>
          ) : (
            <Spinner className="m-5" color="primary">
              Loading Toppings...
            </Spinner>
          )}
          <div className="h5-container">
            <h5 className="cyop-h5"></h5>
          </div>
          <Button
            className="CYOP-btn"
            color="transparent"
            block
            onClick={() => addToCart()}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <Spinner className="m-5" color="primary">
      Loading...
    </Spinner>
  )
}
