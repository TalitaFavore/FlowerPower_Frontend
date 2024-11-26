import "../styles/Info.css";
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img2.png"
import Img3 from "../assets/img3.png"

const Info = () => {
  return (
    <div className="info-container">
      <img
        src={Img1}
        alt="Plant 1"
        className="info-image"
      />
      <img
        src={Img2}
        alt="Plant 2"
        className="info-image"
      />

      <div className="info-image-text-group">
        <img
          src={Img3}
          alt="Plant 3"
          className="info-image-text"
        />
        <p className="info-text">
          Our website offers a wide array of stunning plants, ranging from
          vibrant flowers to lush indoor foliage, allowing you to create your
          very own green oasis. In addition to our extensive plant selection, we
          also provide gardening kits and fertilizers to equip you with
          everything you need to nurture your plants and achieve gardening
          success. Get ready to explore our virtual garden and discover the joys
          of gardening with us!
        </p>
        <button className="info-button">See more photos</button>
      </div>
    </div>

  );
};

export default Info;
