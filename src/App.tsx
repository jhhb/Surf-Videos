import '@blueprintjs/core/lib/css/blueprint.css';
import * as React from 'react';
import {Nav} from './components/Nav';
import {HomePage} from './pages/HomePage';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Nav/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
