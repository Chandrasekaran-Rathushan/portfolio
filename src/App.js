import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './layouts/home/Home';
import Projects from './layouts/projects/Projects.js';
import Contact from './layouts/contact/Contact.js';

import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/index" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/contact" exact component={Contact}/>
          <Redirect to='/index'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
