import './App.css';
import Movies from './Movies';
import { Route, Switch} from 'react-router-dom';
import Favourites from './Favourites';


function App() {

  let route = (
    <Switch>
    
    <Route path="/favourite" component={Favourites} />
    <Route path="/" component={Movies} />
    </Switch >
  )




return (
  <div className="App">
    {route}
  </div>
);
}

export default App;
