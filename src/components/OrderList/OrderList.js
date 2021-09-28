import React from 'react';

const OrderList = (props) => {
    const value = props.order
    // const reducer = ( preValue, current) => preValue + current.quantity ;
    // const result = value.reduce( reducer, 0);

    let result = 0;
    for( const meal of value){
            result = result + meal.quantity;
    }
     return (
        <div>
            <h2>Order List</h2>
                <h4>Total Order: {result}</h4>
        </div>
    );
};

export default OrderList;