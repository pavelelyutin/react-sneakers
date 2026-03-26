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
                <img
                  src="/images/icons/cart.svg"
                  alt="Корзина"
                  className="header__cart-icon"
                />
                <span className="header__cart-price">1205 ₽</span>
              </div>

              <img src="/images/icons/favorite.svg" alt="Избранное" />

              <img src="/images/icons/user.svg" alt="Профиль пользователя" />
            </div>
          </div>
        </header>

        <main>
          {/* products */}
          <section className="products">
            <div className="products__container container">
              <h2 className="products__title">Все кроссовки</h2>
              <ul className="products__list list-reset">
                <article className="products__card card">
                  <img
                    className="card__image"
                    width="133"
                    height="112"
                    src="/images/products/1.jpg"
                    alt="Nike Blazer"
                  />
                  <h3 className="card__title">
                    Мужские Кроссовки Nike Blazer Mid Suede
                  </h3>
                  <div className="card__bottom">
                    <div className="card__price">
                      <span className="card__price-title">Цена:</span>
                      <span className="card__price-number">12 999 ₽</span>
                    </div>
                    <button className="card__button-add btn-reset">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99857 4.46453H6.53544V1.00152C6.53544 -0.333841 4.46443 -0.333841 4.46443 1.00152V4.46453H1.0013C-0.333767 4.46453 -0.333767 6.53547 1.0013 6.53547H4.46443V9.99848C4.46443 11.3338 6.53544 11.3338 6.53544 9.99848V6.53547H9.99857C11.3338 6.53547 11.3338 4.46453 9.99857 4.46453Z"
                          fill="#D3D3D3"
                        />
                      </svg>
                    </button>
                  </div>
                </article>

                <article className="products__card card">
                  <img
                    className="card__image"
                    width="133"
                    height="112"
                    src="/images/products/1.jpg"
                    alt="Nike Blazer"
                  />
                  <h3 className="card__title">
                    Мужские Кроссовки Nike Blazer Mid Suede
                  </h3>
                  <div className="card__bottom">
                    <div className="card__price">
                      <span className="card__price-title">Цена:</span>
                      <span className="card__price-number">12 999 ₽</span>
                    </div>
                    <button className="card__button-add btn-reset">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99857 4.46453H6.53544V1.00152C6.53544 -0.333841 4.46443 -0.333841 4.46443 1.00152V4.46453H1.0013C-0.333767 4.46453 -0.333767 6.53547 1.0013 6.53547H4.46443V9.99848C4.46443 11.3338 6.53544 11.3338 6.53544 9.99848V6.53547H9.99857C11.3338 6.53547 11.3338 4.46453 9.99857 4.46453Z"
                          fill="#D3D3D3"
                        />
                      </svg>
                    </button>
                  </div>
                </article>

                <article className="products__card card">
                  <img
                    className="card__image"
                    width="133"
                    height="112"
                    src="/images/products/1.jpg"
                    alt="Nike Blazer"
                  />
                  <h3 className="card__title">
                    Мужские Кроссовки Nike Blazer Mid Suede
                  </h3>
                  <div className="card__bottom">
                    <div className="card__price">
                      <span className="card__price-title">Цена:</span>
                      <span className="card__price-number">12 999 ₽</span>
                    </div>
                    <button className="card__button-add btn-reset">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99857 4.46453H6.53544V1.00152C6.53544 -0.333841 4.46443 -0.333841 4.46443 1.00152V4.46453H1.0013C-0.333767 4.46453 -0.333767 6.53547 1.0013 6.53547H4.46443V9.99848C4.46443 11.3338 6.53544 11.3338 6.53544 9.99848V6.53547H9.99857C11.3338 6.53547 11.3338 4.46453 9.99857 4.46453Z"
                          fill="#D3D3D3"
                        />
                      </svg>
                    </button>
                  </div>
                </article>

                <article className="products__card card">
                  <img
                    className="card__image"
                    width="133"
                    height="112"
                    src="/images/products/1.jpg"
                    alt="Nike Blazer"
                  />
                  <h3 className="card__title">
                    Мужские Кроссовки Nike Blazer Mid Suede
                  </h3>
                  <div className="card__bottom">
                    <div className="card__price">
                      <span className="card__price-title">Цена:</span>
                      <span className="card__price-number">12 999 ₽</span>
                    </div>
                    <button className="card__button-add btn-reset">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99857 4.46453H6.53544V1.00152C6.53544 -0.333841 4.46443 -0.333841 4.46443 1.00152V4.46453H1.0013C-0.333767 4.46453 -0.333767 6.53547 1.0013 6.53547H4.46443V9.99848C4.46443 11.3338 6.53544 11.3338 6.53544 9.99848V6.53547H9.99857C11.3338 6.53547 11.3338 4.46453 9.99857 4.46453Z"
                          fill="#D3D3D3"
                        />
                      </svg>
                    </button>
                  </div>
                </article>

                                <article className="products__card card">
                  <img className="card__image" width="133" height="112" src="/images/products/1.jpg" alt="Nike Blazer" />
                  <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
                  <div className="card__bottom">
                    <div className="card__price">
                      <span className="card__price-title">Цена:</span>
                      <span className="card__price-number">12 999 ₽</span>
                    </div>
                    <button className="card__button-add btn-reset">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99857 4.46453H6.53544V1.00152C6.53544 -0.333841 4.46443 -0.333841 4.46443 1.00152V4.46453H1.0013C-0.333767 4.46453 -0.333767 6.53547 1.0013 6.53547H4.46443V9.99848C4.46443 11.3338 6.53544 11.3338 6.53544 9.99848V6.53547H9.99857C11.3338 6.53547 11.3338 4.46453 9.99857 4.46453Z" fill="#D3D3D3"/>
                      </svg>
                    </button>
                  </div>
                </article>

                                <article className="products__card card">
                  <img className="card__image" width="133" height="112" src="/images/products/1.jpg" alt="Nike Blazer" />
                  <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
                  <div className="card__bottom">
                    <div className="card__price">
                      <span className="card__price-title">Цена:</span>
                      <span className="card__price-number">12 999 ₽</span>
                    </div>
                    <button className="card__button-add btn-reset">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99857 4.46453H6.53544V1.00152C6.53544 -0.333841 4.46443 -0.333841 4.46443 1.00152V4.46453H1.0013C-0.333767 4.46453 -0.333767 6.53547 1.0013 6.53547H4.46443V9.99848C4.46443 11.3338 6.53544 11.3338 6.53544 9.99848V6.53547H9.99857C11.3338 6.53547 11.3338 4.46453 9.99857 4.46453Z" fill="#D3D3D3"/>
                      </svg>
                    </button>
                  </div>
                </article>

                                <article className="products__card card">
                  <img className="card__image" width="133" height="112" src="/images/products/1.jpg" alt="Nike Blazer" />
                  <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
                  <div className="card__bottom">
                    <div className="card__price">
                      <span className="card__price-title">Цена:</span>
                      <span className="card__price-number">12 999 ₽</span>
                    </div>
                    <button className="card__button-add btn-reset">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99857 4.46453H6.53544V1.00152C6.53544 -0.333841 4.46443 -0.333841 4.46443 1.00152V4.46453H1.0013C-0.333767 4.46453 -0.333767 6.53547 1.0013 6.53547H4.46443V9.99848C4.46443 11.3338 6.53544 11.3338 6.53544 9.99848V6.53547H9.99857C11.3338 6.53547 11.3338 4.46453 9.99857 4.46453Z" fill="#D3D3D3"/>
                      </svg>
                    </button>
                  </div>
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
