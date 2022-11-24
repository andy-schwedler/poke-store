import { useEffect, useState } from "react";

export default function ShoppingItem({ name, url }) {
  const [infos, setInfos] = useState({});

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const data = await response.json();
      setInfos(data);
    }
    startFetching();
  }, [url]);
  return (
    <>
      <div>
        <img
          src={infos.sprites?.default}
          width="50px"
          height="50px"
          alt={infos.name}
        />
        <li>{name}</li>
        <li>{infos.cost} ¥</li>
      </div>
    </>
  );
}
