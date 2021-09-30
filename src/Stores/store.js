import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../Reducers/index';
import thunk from 'redux-thunk';

const initstate ={};

const middlewares =[thunk];
const store = createStore(
    rootReducer,
    initstate,
    compose(
        applyMiddleware(...middlewares),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
