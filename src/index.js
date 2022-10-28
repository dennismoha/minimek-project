import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux'
import configureStore from './store/configureStore';

import "semantic-ui-css/semantic.css";
const store  = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
// Create a reusable render method that we can call more than once
let render = () => {
    // Dynamically import our main App component, and render it
    const App = require("./app/layout/App").default;

    root.render(
        <Provider store={store}>
            <App />
        </Provider>        
    );
};

if(process.env.NODE_ENV !== "production") {
    console.log('module is ', module)
    if(module.hot) {
        // Support hot reloading of components.
        // Whenever the App component file or one of its dependencies
        // is changed, re-import the updated component and re-render it
        module.hot.accept("./app/layout/App", () => {
            setTimeout(render);
        });
    }
}

render();