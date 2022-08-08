
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer'; 
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div className="App">

<Header/>
<Profile/>
<Footer/>
      </div>
    )
  }
}
 export default App; 