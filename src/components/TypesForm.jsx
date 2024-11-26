import { useState } from "react";
import axios from "axios";
import "../styles/Form.css";

const FormularioCadastroTipo = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações básicas
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "O nome do tipo é obrigatório.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Envia os dados para a API
      axios
        .post("http://localhost:8889/api/types", formData)
        .then((response) => {
          alert("Tipo cadastrado com sucesso!");
          setFormData({
            name: "",
            description: "",
          });
        })
        .catch((error) => {
          console.error("Erro ao cadastrar tipo:", error.response || error);
          if (error.response && error.response.data) {
            console.error("Detalhes do erro:", error.response.data);
          }
        });
    }
  };

  return (
    <div className="container-types">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form-title">Cadastro de Tipos</h1>

        <div className="input-group">
          <label htmlFor="name" className="input-label">Nome do Tipo:</label>
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

        <button type="submit" className="submit-button">
          Cadastrar Tipo
        </button>
      </form>
    </div>
  );
};

export default FormularioCadastroTipo;
