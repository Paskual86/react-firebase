import './App.css';
import ListadoNombres from './components/ListadoNombres'
import Welcome from './components/Welcome';
import Card from './components/Card';
import Base from './components/Base';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <Link to="/"> <h2>Base</h2></Link>
      <Link to="/inicio"><h2>Welcome</h2></Link>
      <Link to="/card"><h2>Card</h2></Link>
      <Link to="/listado"><h2>Listado de Nombres</h2></Link>

      <Switch>
        <Route path="/inicio">
          <Welcome name="Pablo"></Welcome>
          <Welcome name="Noe"></Welcome>
        </Route>
        <Route path="/listado">
          <ListadoNombres></ListadoNombres>
        </Route>
        <Route path="/card">
          <Card imagen="https://picsum.photos/id/237/200/300" titulo="Primer Imagen" texto="Imagen Predeterminada"></Card>
        </Route>
        
        <Route path="/users/details/:id">
          <UserDetail/>
        </Route>

        <Route path="/users">
          <Users></Users>
        </Route>

        

        <Route path="/:param1/:param2">
          <Base></Base>
        </Route>
        <Route path="/:param1">
          <Base></Base>
        </Route>
        
        <Route path="/">
          <Base></Base>
        </Route>

        
      </Switch>
    </Router>
  );
}

export default App;
