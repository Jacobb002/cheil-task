import productsObject from "./productsObject";
import "./Filters.css";

// Array for sort filter
const sortSelect = ["popularność", "wszystkie", "cena", "pojemność"];

// Array for functions filter
const functionSelect = [
  "Pokaż wszystkie",
  "Wszystkie",
  "Drzwi AddWash™",
  "Panel AI Control",
  "Silnik inwerterowy",
  "Wyświetlacz elektroniczny",
];

// Array for eletrical class filter
const electricalClassSelect = [
  "Pokaż wszystkie",
  "Wszystkie",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// Array for opacity filter
const opacitySelect = ["Pokaż wszystkie", "Wszystkie", 9, 8, 10.5];

function Filters(props) {
  const defaultProductCard = productsObject;
  const test = () => {
    console.log(defaultProductCard);
  };

  // Function for sort filter
  const onSortSelect = (event) => {
    if (event.target.value === "all") {
      props.setProducts(defaultProductCard);
    }
    if (event.target.value === "popularność") {
      const sortedElement = defaultProductCard
        .slice()
        .sort((a, b) => a.popularity - b.popularity);
      console.log(sortedElement);
      props.setProducts(sortedElement);
    }
    if (event.target.value === "cena") {
      const sortedElement = defaultProductCard
        .slice()
        .sort((a, b) => Number(b.price) - Number(a.price));
      props.setProducts(sortedElement);
    }
    if (event.target.value === "pojemność") {
      const sortedElement = defaultProductCard
        .slice()
        .sort((a, b) => b.capacity - a.capacity);
      props.setProducts(sortedElement);
    }
  };

  // Function for "functions" filter
  const onFuncSelect = (event) => {
    if (event.target.value === "all") {
      props.setProducts(defaultProductCard);
    } else {
      const filteredElement = defaultProductCard.filter((product) =>
        product.productFunc.includes(event.target.value)
      );
      props.setProducts(filteredElement);
    }
  };

  // Function for energy class filter
  const onSelectEnergyClass = (event) => {
    if (event.target.value === "all") {
      props.setProducts(defaultProductCard);
    } else {
      const filteredElement = defaultProductCard.filter(
        (element) => element.electricalClass === event.target.value
      );
      props.setProducts(filteredElement);
      if (filteredElement.length === 0) {
        const newFilterElement = defaultProductCard.filter(
          (element) => element.electricalClass === event.target.value
        );
        props.setProducts(newFilterElement);
      }
    }
  };

  // Function for capacity filter
  const onSelectCapacity = (event) => {
    if (event.target.value === "all") {
      props.setProducts(defaultProductCard);
    } else {
      const filteredElement = defaultProductCard.filter(
        (element) => element.capacity === Number(event.target.value)
      );
      props.setProducts(filteredElement);
    }
  };
  return (
    <>
      <div className="filter-container">
        <div>
          <div className="filter-item">
            <div className="filter-title" onClick={test}>
              Sortuj po:
            </div>
            <div className="filter-input">
              <select className="filter-select" onChange={onSortSelect}>
                {/* Print opctions for sort filter */}
                {sortSelect.map((element, index) => {
                  return (
                    <option
                      key={element}
                      value={index == 1 ? "all" : element}
                      selected={index === 0}
                      className="test"
                    >
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-title">Funkcje:</div>
            <div className="filter-input">
              <select className="filter-select" onChange={onFuncSelect}>
                {/* Print opctions for functions filter */}
                {functionSelect.map((element, index) => {
                  return (
                    <option
                      key={element}
                      value={index === 0 || index == 1 ? "all" : element}
                      disabled={index === 0}
                      selected={index === 0}
                      hidden={index === 0}
                    >
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-title">Klasa energetyczna:</div>
            <div className="filter-input">
              <select className="filter-select" onChange={onSelectEnergyClass}>
                {/* Print opctions for energy class filter */}
                {electricalClassSelect.map((element, index) => {
                  return (
                    <option
                      key={element}
                      value={index === 0 || index == 1 ? "all" : element}
                      disabled={index === 0}
                      selected={index === 0}
                      hidden={index === 0}
                    >
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-title">Pojemność:</div>
            <div className="filter-input">
              <select className="filter-select" onChange={onSelectCapacity}>
                {/* Print opctions for capacity filter */}
                {opacitySelect.map((element, index) => {
                  return (
                    <option
                      key={element}
                      value={index === 0 || index == 1 ? "all" : element}
                      disabled={index === 0}
                      selected={index === 0}
                      hidden={index === 0}
                    >
                      {index === 0 || index == 1 ? element : element + "kg"}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
