import React from "react";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);

  return (
    <div className="wrapper">
      {cartOpened && (
        <Cart
          products={cartProducts}
          onClose={() => setCartOpened(false)}
          setCartProducts={setCartProducts}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <main>
        {/* products */}
        <section className="products">
          <div className="products__container container">
            <div className="products__top">
              <h2 className="products__title">Все кроссовки</h2>
              <div className="products__search">
                <img src="/images/icons/search.svg" alt="Поиск кроссовок" />
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>
            <ProductsList
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
