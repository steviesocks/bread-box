import './App.css';
import CssBassline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './redux/store';

import UnitConversion from './components/unit-conversion/unit-conversion.component';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBassline />
          <UnitConversion />
      </div>
    </Provider>
  );
}

export default App;
