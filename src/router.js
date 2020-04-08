import React from 'react';
import App from './App';
import Food from './components/Food';

const routes = {
    "/": () => <App/>,
    "/menu": () => <Food />

}

export default routes;