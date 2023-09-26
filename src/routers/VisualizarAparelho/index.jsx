import "./visualizar_aparelho.css";
import { listaAparelho } from "../../components/listaAparelhos";
import { useParams } from "react-router-dom";

export default function VisualizarAparelho() {
  const { id } = useParams(); // Obtém o ID da URL

  // Filtra o produto com base no ID da URL
  const produto = listaAparelho.find((item) => item.id === parseInt(id));

  return (
    <div className="container">
      <h1>Detalhes do Produto</h1>
      <p>
        {" "}
        <span>Modelo:</span> {produto.modelo}
      </p>
      <p>
        {" "}
        <span>Marca:</span> {produto.marca}
      </p>
      <p>
        {" "}
        <span>Descrição:</span> {produto.descricao}
      </p>
      <p>
        {" "}
        <span>Preço:</span> {produto.preço}
      </p>
      <div className="posicao-imgs">
        <div>
          <img
            className="tamanho-img"
            src={produto.imagem1}
            alt="imagens celulares ou tablets"
          />
        </div>
        <div>
          <img
            className="tamanho-img"
            src={produto.imagem2}
            alt="imagens celulares ou tablets"
          />
        </div>
        <div>
          <img
            className="tamanho-img"
            src={produto.imagem3}
            alt="imagens celulares ou tablets"
          />
        </div>
      </div>
    </div>
  );
}
