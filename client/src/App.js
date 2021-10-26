import React from 'react';

import LoadingWidget from './views/LoadingWidget';
import AuthStack from './views/AuthStack';
import Dashboard from './views/Dashboard';

import authHelper from './utils/auth_utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      cookie: false,
    };
  }

  componentDidMount() {
    this.setState( { cookie : authHelper.checkCookie() });
    this.setState( { isLoading : false });
  }

  render() {

    // Check if loading is complete
    if (this.state.isLoading) {
      return <LoadingWidget />;

    } else {
      return (
        this.state.cookie ? 
        <Dashboard cookie={this.state.cookie} /> : 
        <AuthStack />
      )
    }
  }
}