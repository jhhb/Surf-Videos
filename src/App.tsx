import '@blueprintjs/core/lib/css/blueprint.css';
import {Provider} from 'mobx-react';
import * as React from 'react';
import {Nav} from './components/Nav';
import {HomePage} from './pages/HomePage';
import {AppStore} from './stores/AppStore';

class App extends React.Component {
  private readonly store: AppStore = new AppStore();

  public render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <Nav/>
          <HomePage/>
        </div>
      </Provider>
    );
  }
}

export default App;
