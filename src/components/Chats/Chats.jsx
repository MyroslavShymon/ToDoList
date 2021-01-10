import { NavLink } from 'react-router-dom';
import Chat from './Chat/Chat';
import Massage from './Massage/Massage';
import classes from './Chats.module.css';

function Chats(props) {
    let chats = props.chatsData.map(chat => (<Chat id={chat.id} name={chat.name} />))
    let massages = props.massagesData.map(massage => (<Massage id={massage.id} text={massage.text} like={massage.like} />))

    return (
        <main className={classes["chats-wrapper"]}>
            <div className={classes.chats}>
                {chats}
            </div>
            <div className={classes.massages}>
                {massages}
            </div>
        </main>
    );
}

export default Chats;