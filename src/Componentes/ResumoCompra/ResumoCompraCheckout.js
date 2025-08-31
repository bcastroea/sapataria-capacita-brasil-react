import { useSelector } from "react-redux";
import Button from "../Buttons/Button";
import "./ResumoCompraCheckout.css";
import { useNavigate } from "react-router-dom";

export default function ResumoCompraCheckout({ onConfirm }) {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.total);
  const frete = 0.0;
  const total = subtotal + frete;
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    if (onConfirm) {
      onConfirm(cartItems, total);
      navigate("/");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="resumo-compra-checkout">
      <h2>Resumo da Compra</h2>

      <ul className="produtos-lista">
        {cartItems.map((item) => (
          <li key={`${item.id}-${item.size}`} className="produto-item">
            <img src={item.image} alt={item.name} />
            <div className="info">
              <p>{item.name}</p>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          </li>
        ))}
      </ul>

      <div className="linha">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="linha">
        <span>Frete</span>
        <span>${frete.toFixed(2)}</span>
      </div>

      <div className="linha total">
        <strong>Total</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>

      <Button
        title="Confirmar Pedido"
        variant="primary"
        onPress={handleConfirmOrder}
        disabled={cartItems.length === 0}
      />
    </div>
  );
}
