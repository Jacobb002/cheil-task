import { useState } from "react";
import energyLogo from "../assets/energy-img.png";
import "./Product.css";

// Array = data for product
const Product = ({ array }) => {
  // Function to button
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="product-container">
        <div>
          <div className="product-body">
            <div className="image-section">
              <div>
                <img src={array.image} className="product-image"></img>
              </div>
            </div>
            <div className="body-section">
              <div className="header">{array.title}</div>
              <div className="details">
                <div>
                  Pojemność (kg): <span>{array.capacity}</span>
                </div>
                <div>
                  Wymiary (GxSxW): <span>{array.size}</span>
                </div>
                <div>
                  Funkcje:
                  {array.productFunc.map((element) => (
                    <span key={element}>{element}, </span>
                  ))}
                </div>
              </div>
              <div className="energy-class">
                <div>Klasa energetyczna</div>
                <div className="energy-logo">
                  <img src={energyLogo}></img>
                  <span>{array.electricalClass}</span>
                </div>
              </div>
              <div className="cost-section">
                <div className="sale-information">
                  Cena obowiązuje: 15.09.2022 - 21.09.2022
                </div>
                <div className="cost">
                  <span>{array.price}</span>
                  <span>00 zł</span>
                </div>
              </div>
              <div className="installment">53,31 zł x 60 rat</div>
            </div>
          </div>
          <button
            onClick={handleButtonClick}
            className={isActive ? "product-btn active" : "product-btn"}
          >
            {isActive ? "wybrane" : "wybierz"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
