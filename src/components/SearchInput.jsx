import "../App.css";
import productsObject from "./productsObject";

const SearchInput = (props) => {
  // Functionality of search input
  const defaultProductCard = productsObject;
  const onChangeValue = (event) => {
    const value = event.target.value;
    if (value === "" || props.products.length === 0) {
      props.setProducts(defaultProductCard);
    } else if (value != "") {
      props.setProducts(
        props.products.filter((element) =>
          element.title.toLowerCase().includes(event.target.value)
        )
      );
    }
  };

  return (
    <div className="input-container">
      <div>
        <input
          onChange={onChangeValue}
          className="input-search"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
