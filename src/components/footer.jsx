import "./footer.css";
import "../geral.css";

function footer() {
  return (
    <footer>
      <div className="ajuste-elementos-footer">
        <div className="ajuste-icones">
          <h3>Acompanhe nossas redes sociais: </h3>
          <img src="https://i.imgur.com/jji7a3f.png" alt="logo instagram" />
          <img src="https://i.imgur.com/Tjr9xrX.png" alt="logo facebook" />
          <img src="https://i.imgur.com/Mej5mPA.png" alt="logo twitter" />
          <img src="https://i.imgur.com/oKy24ve.png" alt=" logo youtube" />
        </div>
        <div>
          <div className="ajuste-selos-seguranca">
            <h3>Selos de segurança:</h3>
            <img src="https://i.imgur.com/yoUq1bl.png" alt="site blindado" />
            <img src="https://i.imgur.com/0n2mUfx.png" alt="selo busca pé" />
            <img src="https://i.imgur.com/tclTxxR.png" alt="selo google" />
            <img src="https://i.imgur.com/45HypGy.png" alt="selo ebit" />
          </div>
        </div>
        <div>
          <div className="ajuste-selos-app">
            <h3>Baixe o APP:</h3>
            <img src="https://i.imgur.com/TnoUoEk.png" alt="img android" />
            <img src="https://i.imgur.com/GsUCX3M.png" alt="img ios" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default footer;
