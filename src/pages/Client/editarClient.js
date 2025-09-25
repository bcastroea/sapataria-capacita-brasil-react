import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clienteApi } from "../../utils/clientApi";
import { setCliente } from "./clientSlice";
import Button from "../../Componentes/Buttons/Button";
import Alert from "../../Componentes/Alert/alert";
import "./EditarClient.css";

export default function EditarCliente() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cliente = useSelector((state) => state.client.cliente);

  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const atualizado = await clienteApi.updateCliente(
        cliente.id,
        { senha },
        cliente.token
      );
      dispatch(setCliente({ ...cliente, email: atualizado.email }));
      setSucesso("Perfil atualizado com sucesso!");
      setSenha("");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div className="editar-container">
      {erro && <Alert type="error" message={erro} onClose={() => setErro("")} />}
      {sucesso && (
        <Alert type="success" message={sucesso} onClose={() => setSucesso("")} />
      )}

      <h1>Editar Perfil</h1>
      <form className="editar-form" onSubmit={handleSubmit}>
        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite nova senha"
          required
        />

        <div className="editar-actions">
          <Button title="Salvar" variant="primary" type="submit" />
          <Button
            title="Cancelar"
            variant="secondary"
            onClick={() => navigate("/cliente")}
          />
        </div>
      </form>
    </div>
  );
}
