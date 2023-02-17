import "../css/Header.css";
import logo from "../image/logo.png";

export default function Header() {
  const titre = "La maison jungle";
  return (
    <div className="header">
      <img src={logo} alt="maison jungle" className="logo" />
      <h1 className="titre">{titre.toUpperCase()}</h1>
    </div>
  );
}
