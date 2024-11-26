import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/ListPlants.css";
import Navbar from "./NavBar";
import Footer from "./Footer";

const ListPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8889/api/plants")
      .then((response) => {
        const loadedPlants = response.data._embedded?.plantDtoList || [];
        setPlants(loadedPlants);
      })
      .catch((err) => {
        console.error("Erro ao carregar as plantas:", err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="plants-container">
        <h1 className="page-title">Plantas Cadastradas</h1>
        <div className="plants-list">
          {plants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.img} alt={plant.name} className="plant-image" />
              <div className="plant-info">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-price"><strong>R$ {plant.price.toFixed(2)}</strong></p>
                <Link to={`/plants/${plant.id}`} className="details-link">
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ListPlants;
