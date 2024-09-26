import React from 'react';
import { FaEye, FaDownload, FaPrint, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Boletos.css';

function Boletos({ boletos }) {
  return (
    <div className="boletos-container">
      <h1>Boletos</h1>
      <Link to="/criar-boleto">
        <button>Adicionar Boleto</button>
      </Link>
      <table className="boletos-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Nome</th>
            <th>Número</th>
            <th>Banco</th>
            <th>Parcela</th>
            <th>Vencimento</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {boletos.map((boleto, index) => (
            <tr key={index}>
              <td style={{ border: boleto.status === "Aberto" ? "2px solid blue" : boleto.status === "Vencido" ? "2px solid red" : "2px solid green" }}>
                {boleto.status}
              </td>
              <td>{boleto.nome}</td>
              <td>{boleto.numero}</td>
              <td>{boleto.banco}</td>
              <td>{boleto.parcela}</td>
              <td>{boleto.vencimento}</td>
              <td>{boleto.valor}</td>
              <td>
                <button><FaEye /></button>
                <button><FaDownload /></button>
                <button><FaPrint /></button>
                <button><FaDollarSign /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Boletos;
