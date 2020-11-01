import './App.css';
import CssBassline from '@material-ui/core/CssBaseline';

import UnitConversion from './components/unit-conversion/unit-conversion.component';

function App() {
  return (
    <div className="App">
      <CssBassline />
        <UnitConversion />
    </div>
  );
}

export default App;
