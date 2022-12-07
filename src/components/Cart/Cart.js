import { StyledCartListItem } from "./StyledCartListItem";

export function Cart({ cartItems }) {
  return (
    <>
      <h2>🛒</h2>
      <h2>total - 0 ¥</h2>
      {cartItems.map((cartItem) => (
        <StyledCartListItem key={cartItem.id}>
          <li>{cartItem.name}</li>
          <li>{cartItem.cost} ¥</li>
          <button>remove</button>
          <hr></hr>
        </StyledCartListItem>
      ))}
    </>
  );
}
