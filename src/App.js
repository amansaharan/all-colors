import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';

import { auth } from './firebase/firebaseUtils';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
