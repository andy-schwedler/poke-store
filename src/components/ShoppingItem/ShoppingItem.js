import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ShoppingItem({ name, url, onAddItem }) {
  const [storeItem, setStoreItem] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const data = await response.json();
      setStoreItem(data);
    }
    startFetching();
  }, [url]);

  return (
    <>
      <StyledItemContainer>
        <img
          src={storeItem.sprites?.default}
          width="50px"
          height="50px"
          alt={storeItem.name}
        />
        <li>{name}</li>
        <li>{storeItem.cost} ¥</li>
        <StyledButton onClick={() => onAddItem(storeItem)} type="button">
          Add Item
        </StyledButton>
      </StyledItemContainer>
    </>
  );
}

export const StyledItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding-left: 0px;
  border: 1px solid darkgray;
  border-radius: 8px;

  li {
    text-align: center;
    list-style-type: none;
    font-size: larger;
  }

  img {
    align-self: center;
    pointer-events: none;
  }

  &:hover {
    color: orangered;
    border: 1px solid orangered;
  }
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 5px 5px 5px 5px;
  width: 50%;
  align-self: center;
  margin: 10px 10px 10px 10px;
`;
