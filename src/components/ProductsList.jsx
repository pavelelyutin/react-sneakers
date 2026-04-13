import React from "react";
import axios from "axios";
import Card from "./Card";

function ProductsList(props) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://f070f08733d5b515.mokky.dev/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://f070f08733d5b515.mokky.dev/cart", obj);
    props.setCartProducts((prev) => [...prev, obj]);
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://f070f08733d5b515.mokky.dev/favorites", obj);
    props.setFavorites((prev) => [...prev, obj])
    console.log('fdsfdsfsdfsdfsd')
  }

  return (
    <ul className="products__list list-reset">
      {products
        .filter((product) =>
          product.title.toLowerCase().includes(props.searchValue.toLowerCase()),
        )
        .map((product) => (
          <li className="products__item" key={product.id}>
            <Card
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              addToFavorite={() => onAddToFavorite(product)}
              addToCart={() => onAddToCart(product)}
            />
          </li>
        ))}
    </ul>
  );
}

export default ProductsList;
