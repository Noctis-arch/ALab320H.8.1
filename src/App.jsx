import { useEffect, useState } from "react";
import { getAllStarships } from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function loadStarships() {
      const data = await getAllStarships();
      setStarships(data);
    }

    loadStarships();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>

      <div className="card-container">
        {starships.map((starship) => (
          <StarShipCard
            key={starship.url}
            starship={starship}
          />
        ))}
      </div>
    </div>
  );
}

export default App;