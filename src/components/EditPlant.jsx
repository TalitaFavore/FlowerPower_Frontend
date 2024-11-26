import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Form.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const EditPlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState({
    name: "",
    subtitle: "",
    description: "",
    type: "",
    price: 0,
    imageUrl: "",
  });
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8889/api/plants/${id}`)
      .then((response) => {
        setPlant({
          ...response.data,
          type: response.data.type?.id || "", // Define o ID do tipo
        });
      })
      .catch((err) => {
        console.error("Erro ao carregar a planta:", err);
        setError("Não foi possível carregar as informações da planta.");
      });

    axios
      .get("http://localhost:8889/api/types")
      .then((response) => {
        setTypes(response.data._embedded.typeDtoList);
      })
      .catch((err) => {
        console.error("Erro ao carregar os tipos:", err);
        setError("Não foi possível carregar os tipos disponíveis.");
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlant((prevPlant) => ({ ...prevPlant, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...plant,
      type: { id: plant.type }, // Envia o ID do tipo no formato esperado
    };

    axios
      .put(`http://localhost:8889/api/plants`, payload)
      .then(() => {
        alert("Planta atualizada com sucesso!");
        navigate(`/plants/${id}`);
      })
      .catch((err) => {
        console.error("Erro ao atualizar a planta:", err);
        alert("Não foi possível atualizar a planta.");
      });
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <Navbar/>
<div className="container">
        <form onSubmit={handleSubmit} className="form">
        <h1 className="form-title">Editar Planta</h1>
          <div className="input-group">
            <label htmlFor="name" className="input-label">
              Nome:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={plant.name}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="subtitle" className="input-label">
              Subtítulo:
            </label>
            <input
              id="subtitle"
              type="text"
              name="subtitle"
              value={plant.subtitle}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="description" className="input-label">
              Descrição:
            </label>
            <textarea
              id="description"
              name="description"
              value={plant.description}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="type" className="input-label">
              Tipo:
            </label>
            <select
              id="type"
              name="type"
              value={plant.type}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="">Selecione um tipo</option>
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="price" className="input-label">
              Preço:
            </label>
            <input
              id="price"
              type="number"
              name="price"
              value={plant.price}
              step="0.01"
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <button type="submit" className="submit-button">
            Salvar Alterações
          </button>
        </form>
      </div>
      <Footer/>
    </div>
    
  );
};

export default EditPlant;
