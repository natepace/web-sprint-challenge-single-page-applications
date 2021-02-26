import React, { useState, useEffect} from "react";
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Pizzaform from './Pizzaform';
import * as yup from 'yup';
import formSchema from './formSchema.js'
import axios from 'axios'

import mcdonalds from './assets/big-mac.jpg'
import taco from './assets/taco.png'
import salad from './assets/boring-salad.jpg'
import panda from './assets/Panda-Express.jpg'
import ranch from './assets/ranch.jpg'
import pizza from './assets/PizzaHut.jpg'
import Food from './Food'
import banner from './assets/Pizza.jpg'


const defaultFood =[
  {
    photo: `${mcdonalds}`,
    name: 'McDonalds',
    type: 'American',
    time: '20 min',
    price: '5 bucks'
  },
  {
    photo: `${taco}`,
    name: 'Taco Bell',
    type: 'Mexican',
    time: '15 min',
    price: '3 bucks'
  },
  {
    photo: `${ranch}`,
    name: 'Rancheritos',
    type: 'Food of Heaven',
    time: 'doesnt matter',
    price: '$7.10'
  },
  {
    photo: `${panda}`,
    name: 'Panda Express',
    type: 'Chinese',
    time: '30 min',
    price: '8 bucks'
  },
  {
    photo: `${pizza}`,
    name: 'Pizza Hut',
    type: 'Italian',
    time: '30 min',
    price: '10 bucks'
  },
  {
    photo: `${salad}`,
    name: 'Vegan Hut Juniors',
    type: 'Not American',
    time: '50 min',
    price: 'way too many bucks'
  }
]


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  onions: false,
  peppers: false,
  instructions: ''
}
const initialFormErrors = {
  name: 'Name is required.',
  size: 'Size is required.',
}



const App = () => {

  // COPIED BELOW 

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)


  const postPizza = pizza => {
    axios.post('https://reqres.in/api/pizza', pizza)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'olives', 'onions', 'peppers'].filter(topping => formValues[topping])
    }
    postPizza(pizza)
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  // COPIED ABOVE

  const [foods, setFoods] = useState(defaultFood)
  return (

    <Stylebody>

          <h1>Pizza Maker Man with Other Foods Too on Display</h1>
          <nav>
            <Styleyo className="nav-links">

             <Stylebutton><Link to="/Pizza">Build Pizza  </Link> </Stylebutton> 
             <Stylebutton><Link to="/">Home </Link> </Stylebutton> 
              
            </Styleyo>
          </nav>
          <Styimg src={banner}/>
          
          <Switch>
<Route path="/pizza">
      
        <Pizzaform values={formValues} change={inputChange} submit={formSubmit} errors={formErrors} disabled = {disabled} />
      </Route>
            
          </Switch>
      
      <Stylefood>
        {
          foods.map((food, idx)=>{
            return(
            <Food key ={idx} photo={food.photo} name={food.name} price={food.price} type={food.type} time={food.time}/>
               
          )
          })
        }
        </Stylefood>
      


    </Stylebody>
  );
};
export default App;

const Stylebody = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
`
const Stylediv = styled.div`



`
const Styleimg = styled.img`
width: 200px;
height 120px;
`
const Stylefood = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:auto


`
const Styimg = styled.img`

`

const Styleyo = styled.div`

`
const Stylebutton = styled.button`


`
