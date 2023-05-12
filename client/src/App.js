//import './App.css';
import { useLocation } from 'react-router-dom';
import Detail from './Views/Detail/Detail.jsx';
import Form from './Views/Form/Form.jsx';
import Home from './Views/Home/Home.jsx';
import { Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar.jsx"
import Landing from './Views/Landing/Landing';


function App() {
  const location = useLocation();
  return (
    <div >
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path={"/"} component={Landing}/>
      <Route exact path="/home" component={Home}></Route>
      <Route path="/home/:id" component={Detail}></Route>
      <Route path="/form" component={Form}></Route>
      
    </div>
  );
}

export default App;
