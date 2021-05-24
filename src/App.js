import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Hats from './components/Hats';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hats" component={Hats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
