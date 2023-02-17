import "../css/Carts.css";

export default function Carts() {
  const monstera = 8;
  const lierre = 10;
  const bDf = 15;
  const prixTotal = monstera + lierre + bDf;

  return (
    <div className="carts">
      <h2> Panier </h2>
      <ul>
        <li>Monstera : {monstera} €</li>
        <li>Lierre : {lierre} €</li>
        <li>bDf : {bDf} €</li>
      </ul>
      Prix total : {prixTotal} €
    </div>
  );
}
