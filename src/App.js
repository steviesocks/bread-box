import React, {useEffect} from 'react';
import Notifier from './Notifier';
import { Route, Switch } from 'react-router-dom';

import CreatePage from './pages/create/create.page';
import CookbookPage from './pages/cookbook/cookbook.page';
import SideBar from './components/side-bar/side-bar.component';

import './App.css';
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux';

const App = ({ checkUserSession }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

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
        <span>Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(null, mapDispatchToProps)(App);
