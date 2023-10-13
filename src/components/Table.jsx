import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Table({ urlApi, dataKeys }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [data]);

  const deletaData = (id) => {
    fetch(`${urlApi}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const updateHandler = (clienteId) => {
    localStorage.setItem('clienteId', clienteId);
    navigate('update');
  }

  return (
    <div>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            {dataKeys.map((e, index) => (
              <th key={index}>{e.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((eData, index) => (
            <tr key={index}>
              {dataKeys.map((eKey, index) => (
                <td key={index}>{eData[eKey]}</td>
              ))}
              <td>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => deletaData(eData._id)}
                >
                  Eliminar
                </button>
              </td>
              <td>
                <button
                  style={{ backgroundColor: "blue" }}
                  onClick={() => updateHandler(eData._id)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
