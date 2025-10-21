import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Productos">Productos</Link>
          </li>
          <li>
            <Link to="/Ofertas">Ofertas</Link>
          </li>
          <li>
            <Link to="/Sobre-nosotros">Sobre nosotros</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
