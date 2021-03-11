import Home from './components/Home'
import GetForms from './components/GetForms'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App() {



  return (
<>
<Router>
<Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/getforms' component={GetForms}/>
</Switch>
</Router>       
</>
  );
}

export default App;