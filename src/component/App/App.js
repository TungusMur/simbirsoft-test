import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Main />
    </Router>
  </div>
);

export default App;
