import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { CarouselFadeExample } from "./Components/Carrusel";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
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
      <main>
        <div id="Carrusel">
          <CarouselFadeExample></CarouselFadeExample>
        </div>
      </main>
    </div>
  );
}

export default App;
