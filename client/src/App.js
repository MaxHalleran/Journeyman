import React from 'react';
import './App.scss';
import LoadingWidget from './views/LoadingWidget';
import AuthStack from './views/AuthStack';
import Dashboard from './views/Dashboard';

function checkCookie() {
  console.log("Hello cookies")
  return false;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: true,
    };
  }

  render() {
    if (this.state.isLoadingComplete) {

      if ( checkCookie() ) {
        return (
          <Dashboard />
        );
      } else {
        return (
          <AuthStack />
        );
      }

    } else {
      return (
        <LoadingWidget />
      );
    }
  }
}