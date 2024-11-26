import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Form.css';


const PlantsForm = () => {
  const [types, setTypes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    price: "",
    description: "",
    img: "",
    type: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8889/api/types")
      .then((response) => {
        const loadedTypes = response.data._embedded?.typeDtoList || [];
        setTypes(loadedTypes);
      })
      .catch((error) => {
        console.error("Erro ao carregar os tipos:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Nome da planta é obrigatório";
    if (!formData.price || isNaN(formData.price)) validationErrors.price = "Preço deve ser numérico";
    if (!formData.type) validationErrors.type = "Selecione um tipo de planta";
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      const payload = {
        ...formData,
        type: { id: parseInt(formData.type, 10) },
      };
  
      console.log("Payload enviado:", payload);
  
      axios
        .post("http://localhost:8889/api/plants", payload)
        .then((response) => {
          alert("Planta cadastrada com sucesso!");
          setFormData({
            name: "",
            subtitle: "",
            price: "",
            description: "",
            img: "",
            type: "",
          });
        })
        .catch((error) => {
          console.error("Erro ao cadastrar planta:", error.response || error);
          if (error.response && error.response.data) {
            console.error("Detalhes do erro:", error.response.data);
          }
        });
    }
  };

  return (
    
      <div className="container">
      <form onSubmit={handleSubmit} className="form">
      <h1 className="form-title">Cadastro de Plantas</h1>
        <div className="input-group">
          <label htmlFor="name" className="input-label">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
          {errors.name && <div className="error-text">{errors.name}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="subtitle" className="input-label">Subtítulo:</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="price" className="input-label">Preço:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input-field"
            required
            step="0.01"
          />
          {errors.price && <div className="error-text">{errors.price}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="description" className="input-label">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="img" className="input-label">Imagem (URL):</label>
          <input
            type="url"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="type" className="input-label">Tipo:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Selecione o tipo</option>
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          {errors.type && <div className="error-text">{errors.type}</div>}
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Cadastrar Planta
        </button>
      </form>
      </div>
  );
};

export default PlantsForm;
