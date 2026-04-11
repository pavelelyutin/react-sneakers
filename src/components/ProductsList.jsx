import React from "react";
import Card from "./Card";

function ProductsList(props) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://66a12d047053166bcabe4115.mockapi.io/sneakers/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    props.setCartProducts((prev) => [...prev, obj]);
  };

  return (
    <ul className="products__list list-reset">
      {products
        .filter((product) => product.title.toLowerCase().includes(props.searchValue.toLowerCase()))
        .map((product) => (
          <li className="products__item" key={product.id}>
            <Card
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              addToFavorite={() => console.log("Добавили в избранное")}
              addToCart={() => onAddToCart(product)}
            />
          </li>
        ))}
    </ul>
  );
}

export default ProductsList;
