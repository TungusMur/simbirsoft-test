import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
};

export default App;
