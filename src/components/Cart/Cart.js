import styled from "styled-components";

export function Cart({ cartItems }) {
  return (
    <>
      <h2>🛒</h2>
      {cartItems.map((cartItem) => (
        <StyledCartListItem key={cartItem.id}>
          <li>{cartItem.name}</li>
          <li>{cartItem.cost} ¥</li>
        </StyledCartListItem>
      ))}
      <hr></hr>
    </>
  );
}

const StyledCartListItem = styled.ul`
  list-style-type: none;
  gap: 20px;
  color: orangered;
  margin: 5px;
  width: 100px;
  padding-left: 0px;
  text-align: left;
`;
