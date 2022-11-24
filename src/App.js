import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";

console.clear();

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    async function startFetching() {
      const response = await fetch("https://pokeapi.co/api/v2/item/");
      const data = await response.json();
      setItems(data.results);
      // console.log(data.results);
    }
    startFetching();
  }, []);

  function handleAddItem(name) {
    setCart([...cart, { name }]);
  }
  console.log(cart);

  return (
    <>
      <Header />
      {items.map((item) => (
        <ShoppingItem
          key={item.name}
          name={item.name}
          url={item.url}
          onAddItem={handleAddItem}
        />
      ))}
    </>
  );
}

export default App;
