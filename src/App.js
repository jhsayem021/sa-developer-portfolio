import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Navber from './component/Navber/Navber';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navber></Navber>
      <Switch>
      <Route path='/'>
      <Home></Home>
        </Route>
        <Route exact path='/Home'>
        <Home></Home>
        </Route>
        <Route exact  path='/contact'>
      <Contact></Contact>
        </Route>
        <Route exact path='/projects'>
        <Home></Home>
        </Route>
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
