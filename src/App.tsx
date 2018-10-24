import '@blueprintjs/core/lib/css/blueprint.css';
import {Provider} from 'mobx-react';
import * as React from 'react';
import {Route} from 'react-router-dom';
import {Nav} from './components/Nav';
import {HomePage} from './pages/HomePage';
import {VideoPage} from './pages/VideoPage';
import {AppStore} from './stores/AppStore';

class App extends React.Component {
  private readonly store: AppStore = new AppStore();

  public render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <Nav/>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/videos/:videoId" component={VideoPage}/>
        </div>
      </Provider>
    );
  }
}

export default App;
