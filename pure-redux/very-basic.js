import 'colors';
import Log from 'log';
import { createStore } from 'redux';

const log = new Log('redux-console');

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

const store = createStore(reducer, { });

store.subscribe((arg1, arg2, arg3) => {
	log.info('Store updated'.blue, JSON.stringify(store.getState()));
});


store.dispatch({ type: 'ENABLE' });
store.dispatch({ type: 'DISABLE' });
