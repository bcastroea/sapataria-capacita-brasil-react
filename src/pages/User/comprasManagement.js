import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Componentes/Buttons/Button";
import "./ComprasManagement.css";
import { comprasApi } from "../../utils/comprasApi";
import { useSelector } from "react-redux";

export default function ComprasManagement() {
  const [compras, setCompras] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const carregarCompras = useCallback(async () => {
    if (!user?.token) return;
    setCarregando(true);
    try {
      const data = await comprasApi.getCompras(user.token);

      // Garante que itens seja sempre um array
      const comprasSeguras = data.map((c) => ({ ...c, itens: c.itens || [] }));

      setCompras(comprasSeguras);
      setErro("");
    } catch (err) {
      setErro(err.message || "Erro ao carregar compras");
    } finally {
      setCarregando(false);
    }
  }, [user]);

  const atualizarStatus = async (id, novoStatus) => {
    if (!user?.token) return;
    try {
      const atualizado = await comprasApi.updateStatusCompra(
        id,
        novoStatus,
        user.token,
      );

      // Garante que itens exista
      const atualizadoSeguro = { ...atualizado, itens: atualizado.itens || [] };

      setCompras((prev) =>
        prev.map((c) => (c.id === id ? atualizadoSeguro : c)),
      );
      setErro("");
    } catch (err) {
      setErro(err.message || "Erro ao atualizar status da compra");
    }
  };

  useEffect(() => {
    carregarCompras();
  }, [carregarCompras]);

  if (carregando) return <div>Carregando...</div>;

  return (
    <section className="compras-section">
      <div className="compras-header">
        <h2>Gerenciar Compras</h2>
        <Button
          title="Voltar"
          variant="secondary"
          onClick={() => navigate(-1)}
        />
      </div>

      {erro && <div className="error">{erro}</div>}

      <div className="compras-list">
        {compras.map((c) => (
          <div key={c.id} className="compra-card">
            <span>
              <b>ID:</b> {c.id}
            </span>
            <span className={`status ${c.status}`}>{c.status}</span>
            <span>
              <b>Total de itens:</b> {c.itens.length}
            </span>
            <div className="compra-actions">
              <select
                value={c.status}
                onChange={(e) => atualizarStatus(c.id, e.target.value)}
              >
                <option value="PENDING">Pendente</option>
                <option value="PAID">Pago</option>
                <option value="SENT">Enviado</option>
                <option value="DELIVERED">Entregue</option>
                <option value="CANCELED">Cancelado</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
