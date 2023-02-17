import { plantList } from "../datas/plantList";

export default function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <h3>Liste des categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <h3>Liste des plantes</h3>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>
            {/* permet de savoir si une plante est dans les meilleure ventes si oui il affiche l'emoij */}
            {plant.name} {plant.isBestSale && <span>👌</span>}
            {/* Permet d'afficher le 🔥 pour les plantes qui sont des  isBestSale   ET dans la category classique  */}
            {/* {plant.isBestSale && plant.category === "classique" && (
              <span>🔥</span>
            )} */}
            {/* Permet que le 🔥 s'affiche à côté des plantes qui sont  isBestSale   OU dans la category classique */}
            {/* {(plant.isBestSale || plant.category === "classique") && (
              <span>🔥</span>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
}
