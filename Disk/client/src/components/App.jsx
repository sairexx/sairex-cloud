import Navbar from "./navbar/Navbar";
import './App.css'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Registration from "./Authorization/Registration";
import Login from "./Authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/User";
import Disk from "./Disk/Disk";

function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])
  
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar/>
      <div className="wrap"> 
        {!isAuth ?
            <Switch>
            <Route path = "/registration" component = {Registration}/>
            <Route path = "/login" component = {Login}/>
            <Redirect to = "/login"/>
          </Switch>
        :
          <Switch>
          <Route exact path = "/" component = {Disk}/>
          <Redirect to = "/"/> 
        </Switch>
        }
      </div> 
    </div>
    </BrowserRouter>
  );
}

export default App;
