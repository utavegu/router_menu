import {NavLink} from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__item" activeClassName="menu__item-active" exact>Главная</NavLink>
      <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active">Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active">Time attack</NavLink>
      <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active">Forza carting</NavLink>
    </nav>
  );
}