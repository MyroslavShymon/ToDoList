import { NavLink } from 'react-router-dom';
import classes from './Chat.module.css';

function Chat(props) {
    return (
        <NavLink to={`/chats/${props.id}`} className={classes["chat"]} activeClassName={classes.active}>
            <img src="https://vokrug.tv/pic/news/f/d/4/0/fd402f4e07b2a141307dee1c01d9dee6.jpg" className={classes.chat__photo}></img>
            <div className={classes.chat__name}>{props.name}</div>
        </NavLink>
    );
}

export default Chat;