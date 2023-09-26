import "./error.css";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <main>
      <div className="centro">
        <h1>
          {" "}
          Erro <span>404</span> - Not Found.
        </h1>
        <img src="https://i.imgur.com/euVt4IR.png" alt="Samsung quebrado" />
        <Link>
          <button>Home</button>
        </Link>
      </div>
    </main>
  );
}
