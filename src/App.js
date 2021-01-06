import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Notes from './components/Notes/Notes';
import Reminder from './components/Reminder/Reminder';
import Navigation from './components/Navigation/Navigation';
import Groups from './components/Groups/Groups';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path="/notes" component={Notes} />
          <Route path="/reminder" component={Reminder} />
          <Route path="/groups" component={Groups} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
