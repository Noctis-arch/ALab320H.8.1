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
    <>
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>

      <main>
        <div className="card-container">
          {starships.map((starship) => (
            <StarShipCard
              key={starship.url}
              starship={starship}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;