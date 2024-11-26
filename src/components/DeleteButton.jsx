import "../styles/DeleteButton.css";

const DeleteButton = ({ onDelete }) => {
  return (
    <button className="delete-button" onClick={onDelete}>
      Excluir
    </button>
  );
};

export default DeleteButton;
