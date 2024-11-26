import "../styles/EditButton.css";

const EditButton = ({ onEdit }) => {
  return (
    <button className="edit-button" onClick={onEdit}>
      Editar
    </button>
  );
};

export default EditButton;
