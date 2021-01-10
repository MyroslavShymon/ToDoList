import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Notes from './components/Notes/Notes';
import Reminder from './components/Reminder/Reminder';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import Chats from './components/Chats/Chats';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path="/notes" render={() => <Notes/>} />
          <Route path="/reminder" render={() => <Reminder />} />
          <Route path="/chats" render={() => <Chats chatsData={props.state.chatsData} massagesData={props.state.massagesData}/>} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
