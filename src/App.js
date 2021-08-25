import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import MusicPage from './pages/music/music.component';
import PhotoPage from './pages/photos/photos.component';
import VideoPage from './pages/videos/videos.component';
import AboutPage from './pages/about/about.component';
import PressPage from './pages/press/press.component';
import ContactPage from './pages/contact/contact.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/music' component={MusicPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/photos' component={PhotoPage} />
          <Route path='/videos' component={VideoPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/press' component={PressPage} />
          <Route path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
