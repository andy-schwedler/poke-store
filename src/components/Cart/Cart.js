import styled from "styled-components";

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

const StyledCartListItem = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
  font-style: italic;
  margin: 5px;
  padding-left: 0px;
  button {
    border: none;
  }
`;
