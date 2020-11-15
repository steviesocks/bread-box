import './App.css';
import CssBassline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './redux/store';

import UnitConversion from './components/unit-conversion/unit-conversion.component';
import Recipe from './components/recipe/recipe.component';
import Ingredient from './components/ingredient/ingredient.component';
import Menu from './components/menu/menu.component';

function App() {
  return (
    <Provider store={store}>
      <CssBassline />
      <div className="App">
        <Menu />
        <Ingredient />
        <Recipe />
        <UnitConversion />
      </div>
      <div className='footer'>
        Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    </Provider>
  );
}

export default App;
