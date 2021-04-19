import React from 'react'
import './App.css';
import Home from './componentes/Home/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AddUSer from './componentes/AddUSer/AddUser';
import ViewUser from './componentes/ViewUser/ViewUser';
import EditUser from './componentes/EditUser/EditUser';




function App() {
  return (
    <>

    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/add-user" component ={AddUSer} />
            <Route exact path="/view-user" component ={ViewUser} />
            <Route exact path="/edit-user" component ={EditUser} />

      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
