import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/Store';
import App from './component/App';
import './reset.scss';
import './styles/fonts.scss';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
