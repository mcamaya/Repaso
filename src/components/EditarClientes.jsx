import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditarClientes() {
  const urlApi = "http://localhost:8080/api/v1/clientes";
  const id = localStorage.getItem("clienteId");
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!id) navigate("/clientes");
    fetch(`${urlApi}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNombre(data.nombre);
        setNumeroDocumento(data.numeroDocumento);
        setCelular(data.celular);
        setEmail(data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    let nuevo = {
      nombre,
      numeroDocumento,
      email,
      celular,
    };

    fetch(`${urlApi}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => {
        alert("Modificado con éxito");
        localStorage.removeItem("clienteId");
        navigate("/clientes");
      })
      .catch((err) => console.log(err));
  };

  const volver = () => {
    navigate("/clientes");
  };

  return (
    <div>
      <form style={{ marginTop: 40 }} onSubmit={(e) => updateData(e)}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>numeroDocumento</label>
        <input
          type="number"
          value={numeroDocumento}
          onChange={(e) => setNumeroDocumento(e.target.value)}
        />

        <label>Celular</label>
        <input
          type="number"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button>Submit</button>
      </form>
      <button onClick={() => volver()}>Volver</button>
    </div>
  );
}
