import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import FriendsContainer from "./components/friends/FriendsContainer";
import NavContainer from "./components/nav/NavContainer";


const App = () => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <NavContainer />
          <div className="app-wrapper-container">

              <Route path="/dialog" render={() => <DialogsContainer/>}/>

              <Route path="/profile" render={() => <Profile/>}/>

              <Route path="/news" component={News}/>

              <Route path="/music" component={Music}/>

              <Route path="/settings" component={Settings}/>

              <Route path="/friends" render={() => <FriendsContainer />}/>
          </div>
        </div>
      </BrowserRouter>
  );
}



export default App;



