import {NavLink} from "react-router-dom";
import './NavBar.css';

const routes = [{
    name: 'main',
    to: '/',
    displayText: 'Главная',
    end: true
}, {
    name: 'services',
    to: '/services',
    displayText: 'Услуги'
}, {
    name: 'about',
    to: '/about',
    displayText: 'О нас'
}, {
    name: 'contacts',
    to: '/contacts',
    displayText: 'Контакты'
}];

const NavBar = () => {

    const navLinks = routes.map((route, index) => {
        return (
            <NavLink
                className={({ isActive }) => (`navigation__item ${isActive && 'navigation__item--active'}`)}
                key={index}
                to={route.to}
                end={route.end}
            >
                {route.displayText}
            </NavLink>
        );
    });

    return (
        <nav className="navigation">
            <div className="navigation__content">
                { navLinks}
            </div>
        </nav>
    );
}

export default NavBar;
