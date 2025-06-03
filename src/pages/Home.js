import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron bg-light p-5 rounded">
        <h1 className="display-4">Sistema de Gestión de Biblioteca</h1>
        <p className="lead">
          Bienvenido al sistema de gestión de biblioteca. Administra libros, revistas y DVDs de forma sencilla.
        </p>
        <hr className="my-4" />
      </div>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Gestión de Libros</h5>
              <p className="card-text flex-grow-1">
                Administra el catálogo de libros de la biblioteca.
              </p>
              <Link to="/libros" className="btn btn-primary mt-auto">
                Ir a Libros
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Gestión de Revistas</h5>
              <p className="card-text flex-grow-1">
                Administra el catálogo de revistas de la biblioteca.
              </p>
              <Link to="/revistas" className="btn btn-primary mt-auto">
                Ir a Revistas
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Gestión de DVDs</h5>
              <p className="card-text flex-grow-1">
                Administra el catálogo de DVDs de la biblioteca.
              </p>
              <Link to="/dvds" className="btn btn-primary mt-auto">
                Ir a DVDs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;