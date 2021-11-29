import React, { Fragment, useState, useEffect } from "react";
import { CartBtn, CartH1 } from "./CartElements";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Cart = () => {
    const [menuItems, setMenuItems] = useState([]);

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
  
        setIsOpen(!isOpen)
  
    }

    const getCart = async () => {
        try {
            const response = await fetch("http://localhost:5000/Cart");
            const jsonData = await response.json();

            setMenuItems(jsonData);
            console.log(jsonData)

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    const [total, setTotal] = useState(0);

    const getTotal = async () => {
        try {
            const response = await fetch("http://localhost:5000/total");
            const jsonData = await response.json();
            
            setTotal(jsonData);

            console.log(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTotal();
    });

    return ( 
        <div>

        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />

            <CartH1> Your Cart </CartH1>


            <Fragment>  
            <table class="table table-striped">
            <thead>
            <tr>
                <th>Menu Item</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
                {menuItems.map(menuItem => (
            <tr key={menuItem.orderid}>
              <td>{menuItem.foodid}</td>
              <td>{menuItem.price}</td>
              <td></td>
            </tr>
          ))}
            <tr>
                <td></td>
                <td></td>
                <td>{total}</td>
            </tr>
            </tbody>
        </table></Fragment>
        <CartBtn to = "Checkout">
                 Checkout
        </CartBtn>

        <CartBtn to = "CancelOrder">
                 Cancel Order
        </CartBtn>

      </div>
    );
};

export default Cart;