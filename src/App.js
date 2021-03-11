import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <Router>
         <Switch>
           <Route path="/Home">
           <Home></Home>
           </Route>
           <Route path="/Explore/:teamId">
           <TeamDetail/>
           </Route>
           <Route exact path ="/">
            <Home/>
           </Route>
           <Route path ="*">
            <NoMatch/>
           </Route>
         </Switch>
       </Router>
      
      </header>
    </div>
  );
}

export default App;
