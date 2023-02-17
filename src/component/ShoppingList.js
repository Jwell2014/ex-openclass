import { plantList } from "../datas/plantList";
import "../css/ShoppingList.css";
import PlantItem from "./PlantItem";

export default function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            key={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}
