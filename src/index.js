import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import './index.css';
import routes from './router';
import './fonts/DrukTextWide-Bold.ttf';
import NotFound from './components/NotFound';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function Routes() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFound/>;
}

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
