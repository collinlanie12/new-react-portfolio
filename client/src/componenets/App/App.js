import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import Projects from '../../pages/Projects/Projects';

class App extends Component {

  preload() {
    document.body.className = document.body.className.replace(/\bis-preload\b/, '');
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
  }

  componentDidMount() {
    window.addEventListener('load', this.preload)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.preload)
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

}

export default App;
