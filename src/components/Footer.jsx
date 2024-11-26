import "../styles/Footer.css";
import Logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Stay Fresh</h2>
          <p className="footer-email">flowerpower@gmail.com</p>
          <p>+55 17 99999-9999</p>
        </div>
        <div className="footer-middle">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>About us</li>
              <li>Products</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="footer-community">
            <h3>Community</h3>
            <ul>
              <li>About us</li>
              <li>Products</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <img className="footer-logo" src={Logo} alt="logo" />
        <span>© FlowerPower. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
