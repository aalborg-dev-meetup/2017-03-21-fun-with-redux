import * as types from './types';

export const onChooseEndpoint = (endpoint) => (dispatch, getState) => {
	console.log('Choosing endppoint', endpoint);
	dispatch({ type: types.PICK_SIDE, payload: endpoint });
};
