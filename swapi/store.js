import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const reducer = (state, action) => {
	console.log(action.type, action.payload);

	switch(action.type) {
		
	}

	return state;
}

export default createStore(reducer, { }, applyMiddleware(thunkMiddleware));
