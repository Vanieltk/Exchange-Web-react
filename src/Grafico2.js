import React, { useState, useEffect } from "react";
import Conecta from "./Conecta";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Grafico2 = () => {
  const [tipos, setTipos] = useState([]);

  const getTipos = async () => {
    const lista = await Conecta.get("tipos_moedas");
    //    console.log(lista);
    setTipos(lista.data);
  };

  // define o método que será executado após renderizar o componente
  useEffect(() => {
    getTipos();
  }, []);

  const labels = tipos.map((tipo) => tipo.tipo);
  const data1 = tipos.map((tipo) => tipo.num);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Nº de Moedas por Tipo",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Nº de Moedas",
       data: data1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "1000px", height: "800px" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Grafico2;