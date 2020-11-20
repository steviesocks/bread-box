import './App.css';
import Notifier from './Notifier';

import CreatePage from './pages/create/create.page';
import CookbookPage from './pages/cookbook/cookbook.page';
import SideBar from './components/side-bar/side-bar.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Notifier />
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path='/' component={CreatePage} />
          <Route exact path='/cookbook' component={CookbookPage} />
        </Switch>
      </div>
      <div className='footer'>
        Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    </div>
  );
}

export default App;
