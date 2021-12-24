
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.css";
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);
