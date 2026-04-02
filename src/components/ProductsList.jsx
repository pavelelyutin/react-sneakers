import React from "react";
import Card from "./Card";

function ProductsList() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([])

  // const addToCart = () => {
  //   setCartProducts([...cartProducts, products])
  // }

  React.useEffect(() => {
    fetch("https://66a12d047053166bcabe4115.mockapi.io/sneakers/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <ul className="products__list list-reset">
      {products.map((product) => (
        <li className="products__item" key={product.id}>
          <Card
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            addToFavorite={() => console.log("Добавили в избранное")}
            addToCart={() => console.log('fadfa')}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
