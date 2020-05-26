import React from 'react';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import FriendsContainer from "./components/friends/FriendsContainer";
import NavContainer from "./components/nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";


const App = () => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <NavContainer />
          <div className="app-wrapper-container">

              <Route path="/dialog" render={() => <DialogsContainer/>}/>

              <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

              <Route path="/news" component={News}/>

              <Route path="/music" component={Music}/>

              <Route path="/settings" component={Settings}/>

              <Route path="/users" render={() => <UsersContainer />}/>

              <Route path="/friends" render={() => <FriendsContainer />}/>
          </div>
        </div>
      </BrowserRouter>
  );
}



export default App;



