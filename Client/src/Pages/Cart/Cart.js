import React, { Fragment, useState, useEffect } from "react";
import { CartH1 } from "./CartElements";

const Cart = () => {
    const [menuItems, setMenuItems] = useState([]);

    const getCart = async () => {
        try {
            const response = await fetch("http://localhost:5000/Cart/:customer");
            const jsonData = await response.json();

            setMenuItems(jsonData);
            
            console.log(Cart);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCart();
    }, []);


    return ( 
        <div>
            <CartH1> Your Cart </CartH1>


            <Fragment>  
            <table class="table table-striped">
            <thead>
            <tr>
                <th>Menu Item</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table></Fragment>
      </div>
    );
};

export default Cart;