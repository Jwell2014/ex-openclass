import { useState } from "react";
import { useEffect } from "react";
import "../css/Cart.css";

function Cart({ cart, updateCart }, { activeCategory, setActiveCategory }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total, activeCategory]);

  return isOpen ? (
    <div className="cart">
      <button className="cart-toggle-button" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      <h2 className="cart-titre-panier"> Votre panier</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button className="cart-btn-vider" onClick={() => updateCart([])}>
            Vider le panier
          </button>
        </div>
      ) : (
        <div>🛒 Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="cart-closed">
      <button className="cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
