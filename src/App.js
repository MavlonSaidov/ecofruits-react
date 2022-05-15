import './main.scss'
import Header from "./GlobalComponents/Header";
import Footer from './GlobalComponents/Footer';
import Homepage from './Components/Homepage';
import Service from './Components/Service';
import About from './Components/About';
import Blog from './Components/Blog';
import Contacts from './Components/Contacts';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
            <Switch>
              <Route exact path='/'><Homepage/></Route>
              <Route path='/about'><About/></Route>
              <Route path='/service'><Service/></Route>
              <Route path='/blog'><Blog/></Route>
              <Route path='/contacts'><Contacts/></Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
