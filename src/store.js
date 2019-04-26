import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let composedEnhancers = compose;
const middleware = [
    thunk
];

if (process.env.NODE_ENV === 'development') {
  composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const getStore = () => {
    const initialState = {
        app: {
            showOnboarding: true
        },
    };

    return createStore(
        rootReducer,
        initialState,
        composedEnhancers(applyMiddleware(...middleware))
    );
};

export default getStore;
