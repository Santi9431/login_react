import React, {useState, useEffect } from "react";

export const Listar = () => {
  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    console.log("Datos cargados desde LocalStorage: ", datos);
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };

  const [registrosLogin, setRegistrosLogin] = useState(obtenerRegistros());
  console.log("Registros cargados en el estado: ", registrosLogin);

  const botonEliminar = (miIndex) => {
    if (window.confirm("¿Esta seguro que quiere eliminar registro?")) {
      var registroFiltrados = registrosLogin.filter((e, index) => {
        return miIndex !== index;
      });
      setRegistrosLogin(registroFiltrados);
    }
  };
  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registrosLogin));
  }, [registrosLogin]);

  return (


    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">Listado De Registro De Pinturas
      </div>

      <div className="table-responsive">

        { registrosLogin.length > 0 ?
        

        <>
          <table
            className="table table-bordered table-hover"
            style={{ marginTop: 12 }}
          >
            <thead
              className="text-center"
              style={{ background: "lightgray" }}
            >
              <tr>
                <th>#</th>
                <th>Titulo</th>
                <th>Estilo</th>
                <th>Tecnica</th>
                <th>Precio</th>
                <th>X</th>
              </tr>
            </thead>
            <tbody className="text-center align-baseline">
              {registrosLogin.map((x, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{x.titulo}</td>
                  <td>{x.estilo}</td>
                  <td>{x.tecnica}</td>
                  <td>{x.precio}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => botonEliminar(index)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>

        : <p className='h5' style={{color: "red"}}>"No hay registros para Mostrar"</p>
        }

      </div>
    </div>
  );
};
