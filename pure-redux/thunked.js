import 'colors';
import Log from 'log';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const log = new Log('redux-console');
log.info('Welcome'.yellow);

const reducer = (state, action) => {
	log.info('Received action in reducer:'.green, action.type);

	switch(action.type) {
		case 'ENABLE':
			return { ...state, enabled: true, pending: false }
		case 'DISABLE':
			return { ...state, enabled: false, pending: false } 
	}

	return state;
}

const store = createStore(reducer, { }, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
	log.info('Store updated'.blue, JSON.stringify(store.getState()));
});

const enable = () => ({ type: 'ENABLE' });

const disableWithDelay = () => (dispatch) => {
	setTimeout(() => dispatch({ type: 'DISABLE' }), 5000);
};

store.dispatch(enable());
store.dispatch(disableWithDelay());
