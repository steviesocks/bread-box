import './App.css';
import CssBassline from '@material-ui/core/CssBaseline';

import Calculator from './components/calculator/calculator.component'
import UnitConversion from './components/unit-conversion/unit-conversion.component';

function App() {
  return (
    <div className="App">
      <CssBassline />
        <UnitConversion />
        {/* <Calculator /> */}
    </div>
  );
}

export default App;
