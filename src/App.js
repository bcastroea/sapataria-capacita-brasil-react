import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Componentes/Header/Header";
import { Footer } from "./Componentes/Footer/Footer";
import { Home } from "./pages/Home/Home";
import Produtos from "./pages/ProdutosGeral/ProdutosGeral";
import ProdutoEspecifico from "./pages/ProdutoEspecifico/ProdutoEspecifico";
import CarrinhoDeCompras from "./pages/Carrinho/CarrinhoDeCompras";
import CheckoutCompras from "./pages/Checkout/CheckoutCompras";
import { Sobre } from "./pages/Sobre/Sobre";

// Rotas Cliente
import CadastroCliente from "./pages/Client/clientCadastro";
import LoginClient from "./pages/Client/clientLogin";
import ClientPage from "./pages/Client/clientPage";
import EnderecoPage from "./pages/Endereco/enderecoPage";
import EnderecoFormPage from "./pages/Endereco/enderecoFormPage";
import ComprasRecentes from "./pages/Compras/comprasRecentes";

// Rotas User
import LoginUser from "./pages/User/userLogin";
import UserPage from "./pages/User/userPage";

// Utils e Redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authUtils, clienteApi } from "./utils/clientApi";
import { logoutCliente, setCliente } from "./pages/Client/clientSlice";
import { logoutUser, setUser } from "./pages/User/userSlice";
import { userApi } from "./utils/requestJson";

// ProtectedRoute
import UserManagementPage from "./pages/User/userManagementPage";
import ProtectedRoute from "./utils/ProtectedRoutes";
import ComprasManagement from "./pages/User/comprasManagement";

function App() {
  const dispatch = useDispatch();

  // 🔧 Função genérica pra restaurar sessão
  const restaurarSessao = async ({
    tokenKey,
    decodeKey,
    apiFn,
    setFn,
    logoutFn,
  }) => {
    const token = localStorage.getItem(tokenKey);
    if (!token) return;

    try {
      const payload = authUtils.decodificarToken(token);

      if (!payload?.[decodeKey]) {
        dispatch(logoutFn());
        localStorage.removeItem(tokenKey);
        return;
      }

      try {
        const entidade = await apiFn(payload[decodeKey], token);
        dispatch(setFn({ ...entidade, token }));
      } catch {
        dispatch(logoutFn());
        localStorage.removeItem(tokenKey);
      }
    } catch {
      dispatch(logoutFn());
      localStorage.removeItem(tokenKey);
    }
  };

  useEffect(() => {
    restaurarSessao({
      tokenKey: "clienteToken",
      decodeKey: "clientId",
      apiFn: clienteApi.getCliente,
      setFn: setCliente,
      logoutFn: logoutCliente,
    });

    restaurarSessao({
      tokenKey: "userToken",
      decodeKey: "userId",
      apiFn: userApi.getUserById,
      setFn: setUser,
      logoutFn: logoutUser,
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<ProdutoEspecifico />} />
          <Route path="/carrinho" element={<CarrinhoDeCompras />} />
          <Route path="/checkout" element={<CheckoutCompras />} />
          <Route path="/sobre" element={<Sobre />} />

          {/* Rotas Cliente */}
          <Route path="/login-cliente" element={<LoginClient />} />
          <Route path="/cadastro-cliente" element={<CadastroCliente />} />
          <Route
            path="/client-page"
            element={
              <ProtectedRoute slice="cliente" redirect="/login-cliente">
                <ClientPage />
              </ProtectedRoute>
            }
          />
          <Route path="/enderecos" element={<EnderecoPage />} />
          <Route path="/enderecos/novo" element={<EnderecoFormPage />} />
          <Route path="/enderecos/:id/editar" element={<EnderecoFormPage />} />
          <Route path="/compras" element={<ComprasRecentes />} />
          <Route path="/user-management" element={<UserManagementPage />} />

          {/* Rotas User */}
          <Route path="/login-user" element={<LoginUser />} />
          <Route
            path="/user-page"
            element={
              <ProtectedRoute slice="user" redirect="/login-user">
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route path="/compras-management" element={<ComprasManagement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
