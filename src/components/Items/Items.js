import React from 'react';
import './Items.css';

const Items = (props) => {
    // console.log(props)
    const handler = props.handler
    const {strArea,strCategory,strMeal,strMealThumb,strYoutube,strInstructions} = props.item;
    const strInst = strInstructions.slice(0,150)
    
    return (
        <div className="cart-container">
            <img src={strMealThumb} alt="strMeal"  style={{"margin-left":"20px","box-shadow":"0px 4px 11px 0px rgba(136,132,132,0.92)","width":"250px","border-radius":"30px","height":"250px"}}/>
            <p className="cst-mar" style={{"margin-top":"20px","margin-bottom":"20px"}}>Country:<b> {strArea}</b></p>
            <p className="cst-mar" style={{"margin-top":"20px","margin-bottom":"20px"}}> Food Catagory: <b>{strCategory}</b></p>
            <p className="cst-mar" style={{"margin-bottom":"30px"}}>{strInst}</p>
            <a href={strYoutube} className="btn-coustom" target="_blank">View The Vidoe</a>        
            <br/>
            <button className="btn-coustom" style={{"margin":"20px 0px 0px 20px","display":"block","cursor":"pointer"}}  onClick={()=>handler(props.item)}>parches</button>
            <h4 className="title">Food Name: {strMeal}</h4>
        </div>
    );
};

export default Items;