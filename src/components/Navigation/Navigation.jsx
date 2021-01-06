import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

function Navigation() {
    return (
        <nav className={classes.navigation}>
            <div className={classes["navigation__logo-wrapper"]}>
                <div className={classes["burger-menu"]}>
                    <div className={classes["burger-menu__item"]}></div>
                    <div className={classes["burger-menu__item"]}></div>
                    <div className={classes["burger-menu__item"]}></div>
                </div>
                <NavLink to="/notes" className={classes.navigation__logo}>ToDoList+</NavLink>
            </div>

            <div className={classes.menu, classes.navigation__menu}>
                <NavigationItem text="Замітки" link="/notes" />
                <NavigationItem text="Нагадування" link="/reminder"/>
                <NavigationItem text="Групи" link="/groups"/>
                <NavigationItem text="Івенти" />
                <NavigationItem text="Календар" />
                <NavigationItem text="Ярлики" />
                <NavigationItem text="Архів" />
                <NavigationItem text="Корзина" />
            </div>
        </nav>
    );
}

export default Navigation;

