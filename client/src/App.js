import './App.css';
import {renderRoutes, routes} from './Router'

function App() {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
