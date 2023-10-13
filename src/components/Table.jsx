import React, { useState, useEffect } from "react";

export default function Table({ urlApi, dataKeys }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => alert(err));
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {dataKeys.map((e, index) => (
              <th key={index}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data.map((eData, index) => (
              <tr key={index}>
                {
                  dataKeys.map((eKey, index) => (
                    <td key={index}>{eData[eKey]}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
