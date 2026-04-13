import { Link } from "react-router";

function Header(props) {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__left">
          <img
            src="/images/logo.svg"
            width="40"
            height="40"
            alt="Логотип React Sneakers"
            className="header__logo"
          />
          <div className="header__brand">
            <h1 className="header__title">React sneakers</h1>
            <span className="header__subtitle">Магазин лучших кроссовок</span>
          </div>
        </Link>
        <div className="header__right">
          <button
            className="header__cart btn-reset"
            onClick={props.onClickCart}
          >
            <img
              className="header__cart-icon"
              width={20}
              height={20}
              src="/images/icons/cart.svg"
              alt="Корзина"
            />
            <span className="header__cart-price">1205 ₽</span>
          </button>

          <Link to='/favorites' className="header__favorite btn-reset">
            <img
              width={20}
              height={20}
              src="/images/icons/favorite.svg"
              alt="Избранное"
            />
          </Link>

          <button className="header__user btn-reset">
            <img
              width={20}
              height={20}
              src="/images/icons/user.svg"
              alt="Профиль пользователя"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
