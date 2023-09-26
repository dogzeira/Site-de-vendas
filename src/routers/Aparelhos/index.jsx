import "./aparelhos.css";
import "../../geral.css";
import { Link } from "react-router-dom";
import "../../components/listaAparelhos";

export default function aparelhos() {
  return (
    <main>
      <h1>Smartphones:</h1>

      <div className="ajuste-posicao-imgs">
        <div className="tamanho-imgs">
          <p className="texto-img">Smartphone Samsung Galaxy S22 Rose</p>
          <img src="https://i.imgur.com/f6S9kFJ.png" alt="celular sansung" />
          <Link to="/visualizar_aparelho/1">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Smartphone Samsung Galaxy A54 Branco</p>
          <img src="https://i.imgur.com/JEdy6iL.png" alt="celular sansung" />
          <Link to="/visualizar_aparelho/2">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Smartphone Samsung Galaxy S23+ Verde</p>
          <img src="https://i.imgur.com/8VMmkyw.png" alt="celular sansun" />
          <Link to="/visualizar_aparelho/3">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Smartphone Samsung Galaxy S21 FE Preto</p>
          <img src="https://i.imgur.com/sPexvVw.png" alt="celular sansun" />
          <Link to="/visualizar_aparelho/4">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Smartphone Samsung Galaxy Z Flip5</p>
          <img src="https://i.imgur.com/ZHVTfAt.png" alt="celular sansun" />
          <Link to="/visualizar_aparelho/5">
            <button>Visualizar Produto</button>
          </Link>
        </div>
      </div>

      <h1>Tablets:</h1>

      <div className="ajuste-posicao-imgs">
        <div className="tamanho-imgs">
          <p className="texto-img">Tablet Samsung Galaxy Tab A8 X200</p>
          <img src="https://i.imgur.com/9ayt3eM.png" alt="tablet sansung" />
          <Link to="/visualizar_aparelho/6">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Tablet Samsung Galaxy S7 FE T735</p>
          <img src="https://i.imgur.com/YFOgZ2a.png" alt="tablet sansung" />
          <Link to="/visualizar_aparelho/7">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Tablet Samsung S6 Lite P619</p>
          <img src="https://i.imgur.com/lHn8AXE.png" alt="tablet sansung" />
          <Link to="/visualizar_aparelho/8">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Tablet Samsung Galaxy Tab S9+</p>
          <img src="https://i.imgur.com/3EgFdUB.png" alt="tablet sansung" />
          <Link to="/visualizar_aparelho/9">
            <button>Visualizar Produto</button>
          </Link>
        </div>
        <div className="tamanho-imgs">
          <p className="texto-img">Tablet Samsung Galaxy Tab S8+</p>
          <img src="https://i.imgur.com/BY4gasi.png" alt="tablet sansung" />
          <Link to="/visualizar_aparelho/10">
            <button>Visualizar Produto</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
