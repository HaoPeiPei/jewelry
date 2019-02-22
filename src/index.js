import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Routes from './routes/index';
import store from './store/index';
import './utils/config';

const App = props => (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(<App />,document.getElementById('root'));
