import React, { useEffect, useState } from "react";
import Table from "./Table";

export default function Clientes() {
  const urlApi = "http://localhost:8080/api/v1/clientes";
  const [nombre, setNombre] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  const dataKeys = [
    "nombre",
    "numeroDocumento",
    "tipoDocumento",
    "celular",
    "email",
  ];

  const sendData = (e) => {
    e.preventDefault();
    const nuevo = {
      nombre,
      numeroDocumento,
      celular,
      email,
    };
    console.log(nuevo);
    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Clientes</h1>
      <Table urlApi={urlApi} dataKeys={dataKeys} />

      <form style={{ marginTop: 40 }} onSubmit={(e) => sendData(e)}>
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
    </div>
  );
}
