import React from "react";
import FormButton from "../../formButton";
import "./travel-new-form.css";

class TravelNewForm extends React.Component {
  render() {
    return (
      <div id="travelNewForm">
        <h1>Cadastrar Nova Viagem </h1>
        <form id="newTravel">
          <label for="truck">Caminhão:</label>
          <select id="dropdown" name="truck">
            <option disabled value selected>
              Selecione uma opção
            </option>
            <option>EKH</option>
            <option>GKI</option>
            <option>EWQ</option>
            <option>GPM</option>
            <option>CLU</option>
          </select>
          <br />
          <label for="km">KM:</label>
          <input type="number" name="km" id="km" />
          <label for="date">Data:</label>
          <input type="date" name="date" id="date" />
          <label for="price">Frete:</label>
          <input type="number" name="price" id="price" />

          <label for="deliveries">Nº de Entregas:</label>
          <input type="number" name="deliveries" id="deliveries" />

          <label for="cities">Cidades:</label>
          <input type="text" name="cities" id="cities" />

          <label for="nfs">NFs:</label>
          <input type="text" name="nfs" id="nfs" />
          <FormButton>Salvar</FormButton>
        </form>
      </div>
    );
  }
}

export default TravelNewForm;
