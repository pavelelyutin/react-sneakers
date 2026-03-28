import Card from "./Card";

const products = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999",
    imageUrl: "/images/products/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "11999",
    imageUrl: "/images/products/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8499",
    imageUrl: "/images/products/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8999",
    imageUrl: "/images/products/4.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: "15199",
    imageUrl: "/images/products/5.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: "11299",
    imageUrl: "/images/products/6.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: "8999",
    imageUrl: "/images/products/7.jpg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: "8999",
    imageUrl: "/images/products/8.jpg",
  },
];

function ProductsList() {
  console.log(products);
  return (
    <ul className="products__list list-reset">
      {products.map((product) => (
        <li className="products__item">
          <Card
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
