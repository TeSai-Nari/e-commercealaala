//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './redux/reducers/index'

//Styling
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const store=createStore(reducers,{},applyMiddleware(ReduxThunk)) //untuk simpan data 

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
