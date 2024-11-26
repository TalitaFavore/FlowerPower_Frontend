import "../styles/Hero.css";
import HeroImage from "../assets/imghero.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Love for Nature</p>
        <h1 className="hero-title">
          Discover Your <span className="highlight">Green</span> Side
        </h1>
        <p className="hero-description">
          We are your one-stop destination for all things green and growing.
          Our website offers a wide array of stunning plants, ranging from
          vibrant flowers to lush indoor foliage, allowing you to create your
          very own green oasis.
        </p>
        <button className="hero-button">Shop now</button>
      </div>
      <div>
        <img className="hero-image" src={HeroImage} alt="imagem" />
      </div>
    </section>
  );
};

export default Hero;
