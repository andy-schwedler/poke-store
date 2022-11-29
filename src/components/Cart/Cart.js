import { Fragment } from "react";
import { StyledItemContainer } from "../ShoppingItem/ShoppingItem";
export function Cart({ cartItems }) {
  return (
    <>
      <h2>Cart</h2>
      {cartItems.map((cartItem) => (
        <StyledItemContainer key={cartItem.id}>
          <img
            src={cartItem.sprites?.default}
            width="50px"
            height="50px"
            alt={cartItem.name}
          ></img>
          <li>{cartItem.name}</li>
          <li>{cartItem.cost} ¥</li>
        </StyledItemContainer>
      ))}
      <hr></hr>
    </>
  );
}
