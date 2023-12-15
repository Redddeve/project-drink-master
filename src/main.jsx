import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.js';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="project-drink-master">
    {/* <Provider> */}
    <App />
    <GlobalStyles />
    {/* </Provider> */}
  </BrowserRouter>
);
