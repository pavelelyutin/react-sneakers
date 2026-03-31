import Card from "./Card";

const products = [
  {
    id: 0,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999",
    imageUrl: "/images/products/1.jpg",
  },
  {
    id: 1,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "11999",
    imageUrl: "/images/products/2.jpg",
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8499",
    imageUrl: "/images/products/3.jpg",
  },
  {
    id: 3,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8999",
    imageUrl: "/images/products/4.jpg",
  },
  {
    id: 4,
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: "15199",
    imageUrl: "/images/products/5.jpg",
  },
  {
    id: 5,
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: "11299",
    imageUrl: "/images/products/6.jpg",
  },
  {
    id: 6,
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: "8999",
    imageUrl: "/images/products/7.jpg",
  },
  {
    id: 7,
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: "8999",
    imageUrl: "/images/products/8.jpg",
  },
];

function ProductsList() {
  return (
    <ul className="products__list list-reset">
      {products.map((product) => (
        <li className="products__item" key={product.id}>
          <Card
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            addToFavorite={() => console.log('Добавили в избранное')}
            addToCart={() => console.log('Добавили в корзину')}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
