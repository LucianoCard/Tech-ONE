import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usuarios/1">Ir a Usuario 1</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default App;
