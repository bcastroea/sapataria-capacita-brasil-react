import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Componentes/Header/Header";
import { Home } from "./pages/Home/Home";
import Produtos from "./pages/ProdutosGeral/ProdutosGeral";
import { Sobre } from "./pages/Sobre/Sobre";
import { Footer } from "./Componentes/Footer/Footer";
import  CarrinhoDeCompras  from "./pages/Carrinho/CarrinhoDeCompras"

import ProdutoEspecifico from "./pages/ProdutoEspecifico/ProdutoEspecifico";
import { Provider } from "react-redux";
import { store } from "./store";
import CheckoutCompras from "./pages/Checkout/CheckoutCompras";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos/:id" element={<ProdutoEspecifico />} />
            <Route path="/carrinho" element={<CarrinhoDeCompras />} />
            <Route path="/checkout" element={<CheckoutCompras />} /> {/* Nova rota */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
