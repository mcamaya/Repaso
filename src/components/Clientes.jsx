import React, { useEffect, useState } from "react";
import Table from "./Table";

export default function Clientes() {
  const urlApi = "http://localhost:8080/api/v1/clientes";
  const dataKeys = [
    "nombre",
    "numeroDocumento",
    "tipoDocumento",
    "celular",
    "email"
  ]

  return (
    <div>
      <h1>Clientes</h1>
      <Table 
        urlApi={urlApi}
        dataKeys={dataKeys}
      />
    </div>
  );
}
