import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProdutos } from "../../utils/requestJson";
import { useDispatch } from "react-redux";
import { addItem } from "../../Componentes/Cart/CartSlice";

import Button from "../../Componentes/Buttons/Button";
import Stars from "../../Componentes/Stars/Stars";
import SelectSize from "../../Componentes/SelectSize/SelectSize";
import QuantitySelector from "../../Componentes/QuantitySelector/QuantitySelector";
import ProdutoCard from "../../Componentes/produtos/cardProduto/cardProduto";

import "./ProdutoEspecifico.css";
import MiniaturasSlider from "../../Componentes/MiniaturasSlider/MiniaturasSlider";

export default function ProdutoEspecifico() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [quantidade, setQuantidade] = useState(1);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const [lightboxImagem, setLightboxImagem] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const produto = produtos.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  useEffect(() => {
    getProdutos()
      .then((data) => setProdutos(data))
      .catch(() => setErro("Erro ao carregar os produtos."))
      .finally(() => setCarregando(false));
  }, []);

  useEffect(() => {
    document.body.classList.toggle("body-no-scroll", !!lightboxImagem);
    return () => document.body.classList.remove("body-no-scroll");
  }, [lightboxImagem]);

  // Verificação mais robusta para produto e suas propriedades
  if (carregando)
    return (
      <div className="ProdutoDetalhe">
        <p>Carregando produto...</p>
      </div>
    );

  if (erro || !produto)
    return (
      <div className="ProdutoDetalhe">
        <p>{erro || "Produto não encontrado."}</p>
      </div>
    );

  // Verificar se o produto tem as propriedades necessárias
  if (!Array.isArray(produto.imagens) || produto.imagens.length === 0)
    return (
      <div className="ProdutoDetalhe">
        <p>Produto sem imagens disponíveis.</p>
      </div>
    );

  if (!produto.precos || !Array.isArray(produto.precos) || produto.precos.length === 0)
    return (
      <div className="ProdutoDetalhe">
        <p>Informações de preço não disponíveis.</p>
      </div>
    );

  const handleAddToCart = () => {
    if (!tamanhoSelecionado) {
      alert("Por favor, selecione um tamanho");
      return;
    }
    dispatch(
      addItem({
        id: produto.id,
        name: produto.nome,
        price: produto.precos[0].aVista,
        image: produto.imagens[0]?.url || produto.imagens[0],
        size: tamanhoSelecionado,
        quantity: quantidade,
        maxQuantity: produto.qtdEstoque || 10, // Corrigido para qtdEstoque
      })
    );
    navigate("/carrinho");
  };

  const irParaProximo = () => {
    if (!produto || !produto.imagens) return;
    const ehUltimaImagem = imagemAtiva === produto.imagens.length - 1;
    const novoIndice = ehUltimaImagem ? 0 : imagemAtiva + 1;
    setImagemAtiva(novoIndice);
  };

  const irParaAnterior = () => {
    if (!produto || !produto.imagens) return;
    const ehPrimeiraImagem = imagemAtiva === 0;
    const novoIndice = ehPrimeiraImagem
      ? produto.imagens.length - 1
      : imagemAtiva - 1;
    setImagemAtiva(novoIndice);
  };

  const abrirLightbox = (src) => setLightboxImagem(src);
  const fecharLightbox = () => setLightboxImagem(null);

  const precoPrincipal = produto.precos[0];
  const parcelaPrincipal = precoPrincipal.parcelamentos && 
                          Array.isArray(precoPrincipal.parcelamentos) && 
                          precoPrincipal.parcelamentos.length > 0
    ? precoPrincipal.parcelamentos[0]
    : null;
  const precoPix = precoPrincipal.aVista;

  const embaralhar = (arr) => [...arr].sort(() => 0.5 - Math.random());
  const relacionados = embaralhar(
    produtos.filter((p) => p.tipo === produto.tipo && p.id !== produto.id)
  ).slice(0, 3);

  return (
    <div className="ProdutoDetalhe">
      <div className="produto-container">
        <section className="produto-imagens">
          <div className="carrossel-container">
            <button
              onClick={irParaAnterior}
              className="carrossel-btn btn-anterior"
              aria-label="Imagem anterior"
            >
              ‹
            </button>
            <div className="carrossel-viewport">
              <div
                className="carrossel-wrapper"
                style={{ transform: `translateX(-${imagemAtiva * 100}%)` }}
              >
                {produto.imagens.map((img, index) => (
                  <img
                    key={index}
                    src={img.url || img} // Suporte para ambos os formatos
                    alt={`${produto.nome} - Imagem ${index + 1}`}
                    className="carrossel-imagem"
                    onClick={() => abrirLightbox(img.url || img)}
                    onError={(e) => {
                      e.target.src = '/fallback-image.jpg';
                    }}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={irParaProximo}
              className="carrossel-btn btn-proximo"
              aria-label="Próxima imagem"
            >
              ›
            </button>
          </div>
          <MiniaturasSlider
            images={produto.imagens}
            selectedIndex={imagemAtiva}
            onThumbnailClick={setImagemAtiva}
          />
        </section>

        <section className="produto-info">
          <h1>{produto.nome}</h1>

          <div className="avaliacoes">
            <Stars rating={produto.stars || 4.5} />
            <a href="#avaliar">Avaliar este produto</a>
            <a href="#avaliacoes">{produto.qtdAvaliacao || 0} avaliações</a>
          </div>

          <p className="preco-principal">
            R$ {precoPix.toFixed(2).replace(".", ",")}
          </p>

          <div className="opcoes-pagamento">
            {parcelaPrincipal && (
              <p>
                em até{" "}
                <strong>
                  {parcelaPrincipal.parcelas}x de R${" "}
                  {parcelaPrincipal.valor.toFixed(2).replace(".", ",")}
                </strong>{" "}
                sem juros
              </p>
            )}
            <p>
              ou <strong>R$ {precoPix.toFixed(2).replace(".", ",")}</strong> à
              vista com 5% no Pix
            </p>
          </div>

          <p className="calçados-tipo">Calçados Adulto</p>

          <SelectSize
            sizes={produto.tamanhos.map(t => t.numero)} // Converter objetos para números
            onSelect={setTamanhoSelecionado}
          />

          <div className="descricao-material-container">
            <p>{produto.descricao}</p>
          </div>

          <QuantitySelector onChange={setQuantidade} />

          <Button
            title={"Comprar"}
            variant="primary"
            onPress={handleAddToCart}
          />

          <div className="calculadora-frete">
            <p>Calcule prazos e preços</p>
            <div className="input-grupo">
              <input type="text" placeholder="Digite seu CEP" />
              <button className="btn-consultar">Consultar</button>
            </div>
            <a href="#naoseimeucep" className="link-cep">
              Não sei meu CEP
            </a>
          </div>
        </section>
      </div>

      <section className="relacionados-container">
        <h3>Você também pode gostar</h3>
        <div className="relacionados-grid">
          {relacionados.length === 0 ? (
            <p>Nenhum produto relacionado encontrado.</p>
          ) : (
            relacionados.map((item) => (
              <ProdutoCard key={item.id} produto={item} />
            ))
          )}
        </div>
      </section>

      {lightboxImagem && (
        <div className="lightbox-overlay" onClick={fecharLightbox}>
          <button className="lightbox-fechar" aria-label="Fechar">
            ×
          </button>
          <img
            src={lightboxImagem}
            alt="Imagem ampliada"
            className="lightbox-imagem"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
