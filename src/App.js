import './App.css';

import UnitConversion from './components/unit-conversion/unit-conversion.component';
import Recipe from './components/recipe/recipe.component';
import Ingredient from './components/ingredient/ingredient.component';
import SideBar from './components/side-bar/side-bar.component';

function App() {
  return (
    <div>
      <div className="App">
        <SideBar />
        <Ingredient />
        <Recipe />
        <UnitConversion />
      </div>
      <div className='footer'>
        Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    </div>
  );
}

export default App;
