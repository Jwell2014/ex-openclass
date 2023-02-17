import "../css/Description.css";

export default function Recommendation() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 5;

  if (!isSpring) {
    return <div className="isNo"> Ce n'est pas le moment de rempoter 🍂</div>;
  }
  return <div className="isYes"> C'est le printemps rempotez 🪴</div>;
}
