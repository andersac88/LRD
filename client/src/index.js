import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navbar/index.js';

class App extends Component {

  render () {
    return (
      <NavigationBar></NavigationBar>
    );
  }
}








ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

