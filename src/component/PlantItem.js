import CareScale from "./CareScale";
import "../css/PlantItem.css";

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

export default function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className="plant-item">
      <span className="plant-item-price">{price}€</span>
      <img
        className="plant-item-cover"
        src={cover}
        alt={`${name} cover`}
        onClick={() => handleClick()}
      />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}
