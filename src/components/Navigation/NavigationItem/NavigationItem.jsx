import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

function NavigationItem(props) {
    return (
        <NavLink to={`${props.link}`} className={`${classes.menu__item}`} activeClassName={classes.menu__item_active}>
            <div className={classes.menu__img}></div>
            <div className={classes.menu__text}>{props.text}</div>
        </NavLink>
    );
}

export default NavigationItem;