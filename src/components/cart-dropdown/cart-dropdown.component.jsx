import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items ">
        {cartItems.map((item, index) => (
          <CartItem cartItem={item} key={index} />
        ))}
      </div>

      <Button>GO to checkout</Button>
    </div>
  );
}

export default CartDropdown;
