import Product from "./Product";
import "./ProductsCard.css";
import "./Product.css";

{
  /* Array = data of products */
}
const ProductCard = ({ array }) => {
  return (
    <div className="products-card">
      <div>
        {/* Print products */}
        {array.map((element, index) => {
          return <Product key={index} array={element} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
