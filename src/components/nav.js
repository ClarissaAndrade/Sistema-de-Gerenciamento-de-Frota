import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          SGF
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/travels" className="nav-link">
                Viagens <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown active">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Despesas
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Freios
                </a>
                <a className="dropdown-item" href="#">
                  Pneus
                </a>
                <a className="dropdown-item" href="#">
                  Motor
                </a>
                <a className="dropdown-item" href="#">
                  Parte Elétrica
                </a>
                <a className="dropdown-item" href="#">
                  Troca de Óleo
                </a>
                <a className="dropdown-item" href="#">
                  Outros
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Faturamento
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Gráficos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
