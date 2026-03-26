function App() {
  return (
    <body>
      <div className="wrapper">
        {/* header */}
        <header className="header">
          <div className="header__container container">
            <div className="header__left">
              <img
                src="/images/logo.svg"
                width="40"
                height="40"
                alt="Логотип React Sneakers"
                className="header__logo"
              />
              <div className="header__brand">
                <h1 className="header__title">React sneakers</h1>
                <span className="header__subtitle">
                  Магазин лучших кроссовок
                </span>
              </div>
            </div>
            <div className="header__right">
              <div className="header__cart">
                <img src="/images/icons/cart.svg" alt="Корзина" className="header__cart-icon" />
                <span className="header__cart-price">1205 ₽</span>
              </div>

              <img src="/images/icons/favorite.svg" alt="Избранное" />

              <img src="/images/icons/user.svg" alt="Профиль пользователя" />
            </div>
          </div>
        </header>

        <main>
          <section className="products">
            <div className="products__container container">
              <h2 className="products__title">Все кроссовки</h2>
              <ul className="products__list list-reset">
                <article className="products__card card">
                  dddd
                </article>
              </ul>
            </div>
          </section>
        </main>

        <footer></footer>
      </div>
    </body>
  );
}

export default App;
