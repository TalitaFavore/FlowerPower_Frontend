import "../styles/Instructions.css";

// Importando as imagens
import WateringImage from "../assets/Wattering.png";
import SunlightImage from "../assets/Sunlight_1.png";
import NutrientsImage from "../assets/Nutrients.png";

const Instructions = () => {
  const steps = [
    {
      title: "Watering",
      description:
        "Water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root dehydration.",
      image: WateringImage,  // Usando a imagem importada
    },
    {
      title: "Sunlight",
      description:
        "Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs.",
      image: SunlightImage,  // Usando a imagem importada
    },
    {
      title: "Nutrients and Fertilizing",
      description:
        "Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.",
      image: NutrientsImage,  // Usando a imagem importada
    },
  ];

  return (
    <section className="instructions">
      <div className="instructions-group">
        <h2 className="instructions-title">Steps To Take Care Of Your Plants</h2>
        <p className="instructions-description">
          By following these three steps - proper watering, appropriate sunlight,
          and providing essential nutrients - you'll be well on your way to
          maintaining healthy and thriving plants.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div>
              <img className="step-icon" src={step.image} alt={step.title} /> {/* Usando a imagem importada */}
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructions;
