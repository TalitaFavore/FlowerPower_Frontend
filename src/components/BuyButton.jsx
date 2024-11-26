import "../styles/BuyButton.css";

const BuyButton = () => {
  const handleClick = () => {
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <button className="buy-button" onClick={handleClick}>
      Comprar
    </button>
  );
};

export default BuyButton;
