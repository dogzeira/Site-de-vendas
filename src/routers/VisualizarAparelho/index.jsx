import "./visualizar_aparelho.css";
import { listaAparelho } from "../../components/listaAparelhos";
import { useParams } from "react-router-dom";

export default function visualizar_aparelho() {
  const visualizar_aparelho = () => {
    const { id } = useParams();

    return (
      <main>
        <h1>Lista de Aparelhos</h1>
        <ul>
          {listaAparelho.map((aparelho) => (
            <li key={aparelho.id}>
              <h2>{aparelho.modelo}</h2>
              <p>Marca: {aparelho.marca}</p>
              <p>Descrição: {aparelho.descricao}</p>
              <p>Preço: {aparelho.preço}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  };
}
