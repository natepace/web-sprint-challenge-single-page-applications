import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

const PizzaForm = (props) => {
    const { values, submit, change, errors, disabled} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className = "pizzaFormDiv">
            <h1>Make-ah Da Pizzah!</h1>
            
            <form onSubmit = {onSubmit}>
                <div className = "errors">
                    
                    
                </div>

                <label><h3>Your name</h3>
                    <p>{errors.name}</p>
                    <input name = "name" type="text" value = {values.name} onChange={onChange}/>
                </label>

                <label><h3>Choice of size</h3>
                    <p>{errors.size}</p>
                    <select
                    onChange={onChange}
                    value={values.size}
                    name='size'>
                        <option value = ''>--Select size--</option>
                        <option value = 'small'>Big</option>
                        <option value = 'medium'>Bigger</option>
                        <option value = 'large'>Biggest</option>
                        <option value = 'huge'>FREAKING BEAST MONSTER BIG</option>
                    </select>
                </label>

                <label><h3>Add Toppings</h3>
                    
                    <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                    />
                    </label>

                    <label>Olives
                    <input 
                        type='checkbox'
                        name='olives'
                        onChange={onChange}
                        />
                    </label>

                    <label>Onions
                    <input 
                        type='checkbox'
                        name='onions'
                        onChange={onChange}
                        />
                    </label>

                    <label>Peppers
                    <input 
                        type='checkbox'
                        name='peppers'
                        onChange={onChange}
                        />
                    </label>
                </label>

                <label><h3>Delivery Instructions</h3>
                <h4></h4>
                <input style = {{width: '90%', marginLeft:'4%'}} name = 'instructions' type = 'text' onChange={onChange} value = {values.instructions}/>
                </label>

                <button id = "submit" disabled={disabled}>Order Pizza</button>
            </form>
        </div>
    );
    };
export default PizzaForm; 