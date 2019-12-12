import React from 'react';
import './App.css';
import Header from '../view/components/Header'
import Main from '../view/components/HomePage/Main'
import Footer from '../view/components/Footer'
import SignIn from '../view/components/SignForms/SignIn'
import SignUp from '../view/components/SignForms/SignUp'
import Dashboard from '../view/components/Dashboard/Dashboard'
import UserList from '../view/components/Users/UserList'
import Card from '../view/components/Card/Card'
import CheckBox from '../view/components/CheckBox/CheckBox'
import Posts from '../view/components/Posts/Posts'
import {
  BrowseRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Cards from '../view/components/Card/Cards';
import Button from '../view/Button/Button'



class App extends React.Component {
  render() {
    return (

      <div>
        <Header />
        <Switch>

          <Route exact path='/' component={Posts} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/dashboard' component={Dashboard} />



        </Switch>
        <Footer />
      </div>
    )
  }
}






export default App;
