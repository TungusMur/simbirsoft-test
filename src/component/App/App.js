import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header';
// import colorBlue from '../../img/1.png';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
        {/* <div className="draft">
        <img alt="colorBlue" src={colorBlue} />
      </div> */}
      </Router>
    </div>
  );
};

export default App;
