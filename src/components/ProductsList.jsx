import Card from "./Card";

function ProductsList() {
  return (
    <ul className="products__list list-reset">
      <li className="products__item">
        <Card />
      </li>
    </ul>
  );
}

export default ProductsList
