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
			return { ...state, enabled: true }
		case 'DISABLE':
			return { ...state, enabled: false}
	}

	return state;
}

const store = createStore(reducer, { }, applyMiddleware(thunkMiddleware));

store.subscribe((arg1, arg2, arg3) => {
	log.info('Store updated'.blue, JSON.stringify(store.getState()));
});

const enable = () => ({ type: 'ENABLE' });

function disableWithDelay() {
	return function(dispatch) {
		setTimeout(function() {
			dispatch({ type: 'DISABLE' })	
		}, 5000);
	}
}

store.dispatch(enable());
store.dispatch(disableWithDelay());
