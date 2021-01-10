import { NavLink } from 'react-router-dom';
import classes from './Massage.module.css';

function Massage(props) {
    return (
        <div className={classes["massage-wrapper"]}>
            <div className={classes.massage}>{props.text}</div>
        </div>
    );
}

export default Massage;