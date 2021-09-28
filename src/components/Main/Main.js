import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../Localstorage/Localstorage';
import Items from '../Items/Items';
import OrderList from '../OrderList/OrderList';
import './Main.css';

const Main = () => {

    const [ cartData , setCartData ] = useState([]);

    useEffect( () =>{
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then( res => res.json())
            .then( data => setCartData(data.meals))
    },[]);

    const [ order , setOrder ] = useState([]);

    const handler = (meal) =>{
        meal.quantity = 1;
        const newOrder = [...order, meal];
        setOrder( newOrder )
        addToDb(meal.idMeal)
    }

    useEffect( () =>{
        if(cartData.length){
            const saveDb =  getDb();
           const saveOrder = [];
           for( const mealId in saveDb){

               const meal = cartData.find(ml => ml.idMeal === mealId )
               
               const quantity = saveDb[mealId];
               meal.quantity = quantity;

               saveOrder.push(meal)
           }
           setOrder(saveOrder)
        }
    },[cartData])
    return (
       <div className="container">
            <div className="cart">
                    
                {
                    cartData.map( item =>  <Items handler={handler} key={item.idMeal} item={item}></Items>)
                }
                
            </div>
            <div style={{"marginLeft":"50px"}}>
                <OrderList order = {order}></OrderList>
            </div>
       </div>
    );
};

export default Main;