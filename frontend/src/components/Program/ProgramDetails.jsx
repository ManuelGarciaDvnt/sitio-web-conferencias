import React from "react";

const ProgramDetails = () => {
  return (
    <div className="ProgramDetails">
      <div className="Program-event">
        <h2>Programa del evento</h2>
        <nav className="Program-menu mb-2">
          <a href="#">
            <i className="fas fa-code" />
            Talleres
          </a>
          <a href="#">
            <i className="fas fa-comment" />
            Conferencias
          </a>
          <a href="#">
            <i className="fas fa-university" />
            Seminarios
          </a>
        </nav>
        <div className="Program-info-container">
          <div className="Program-info mb-4">
            <h3 className="mb-2">HTML5, CSS3 y JAVASCRIPT</h3>
            <p className="mb-1">
              <i className="fas fa-clock" />
              10:00
            </p>
            <p className="mb-1">
              <i className="fas fa-calendar" />
              10 de Diciembre
            </p>
            <p className="mb-1">
              <i className="fas fa-user" />
              Christian Guado
            </p>
          </div>
          <div className="Program-info mb-4">
            <h3 className="mb-2">Node js avanzadoT</h3>
            <p className="mb-1">
              <i className="fas fa-clock" />
              10:00
            </p>
            <p className="mb-1">
              <i className="fas fa-calendar" />
              10 de Diciembre
            </p>
            <p className="mb-1">
              <i className="fas fa-user" />
              Christian Guado
            </p>
          </div>
          <button className="btn btn-primary">Ver mas</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
