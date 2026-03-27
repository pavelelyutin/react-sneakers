import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <body>
      <Cart />

      <div className="wrapper">
        <Header />

        <main>
          {/* products */}
          <section className="products">
            <div className="products__container container">
              <div className="products__top">
                <h2 className="products__title">Все кроссовки</h2>
              </div>
              <ProductsList />
            </div>
          </section>
        </main>

        <footer></footer>
      </div>
    </body>
  );
}

export default App;
