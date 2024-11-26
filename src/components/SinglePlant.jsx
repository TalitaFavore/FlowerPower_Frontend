import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SinglePlant.css";
import BuyButton from "../components/BuyButton";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import Navbar from "./NavBar";
import Footer from "./Footer";

const SinglePlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8889/api/plants/${id}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((err) => {
        console.error("Erro ao carregar a planta:", err);
        setError("Não foi possível carregar as informações do produto.");
      });
  }, [id]);

  const handleEdit = () => {
    navigate(`/plants/edit/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza de que deseja excluir este item?")) {
      axios
        .delete(`http://localhost:8889/api/plants/${id}`) // Certifique-se de que o ID é o correto
        .then(() => {
          alert("Planta excluída com sucesso!");
          navigate("/plants"); // Redireciona para a lista de plantas
        })
        .catch((err) => {
          console.error("Erro ao excluir a planta:", err);
          alert("Não foi possível excluir a planta.");
        });
    }
  };
  

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!plant) {
    return <div className="loading-message">Carregando...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <Link to="/plants" className="back-link">← Voltar para a lista</Link>
        <div className="product-content">
          <img src={plant.img} alt={plant.name} className="product-image" />
          <div className="product-info">
            <h1 className="product-name">{plant.name}</h1>
            <p className="product-subtitle">{plant.subtitle}</p>
            <p className="product-description">{plant.description}</p>
            <p className="product-type"><strong>Tipo:</strong> {plant.type.name}</p>
            <p className="product-price"><strong>Preço: </strong>R$ {plant.price.toFixed(2)}</p>
            <div className="button-group">
              <EditButton onEdit={handleEdit} />
              <DeleteButton onDelete={handleDelete} />
              <BuyButton />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SinglePlant;
