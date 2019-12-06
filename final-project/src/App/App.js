import React from 'react';
import './App.css';
import Header from '../view/components/Header'
import Main from '../view/components/HomePage/Main'
import Footer from '../view/components/Footer'
import SignIn from '../view/components/SignForms/SignIn'
import SignUp from '../view/components/SignForms/SignUp'
import {
  BrowseRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/SignIn' component={SignIn} />
        </Switch>
        <Footer />
      </div>
    )
  }
}






export default App;
