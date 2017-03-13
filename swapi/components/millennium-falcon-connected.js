import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import MillenniumFalcon from '../components/millennium-falcon';

import * as types from '../types';
import { onChooseEndpoint } from '../actions';

const mapStateToProps = (state) => {
	const  { endpoint, data } = state;

	return {
		list: (data && data[endpoint]) || [],
		endpoint: endpoint,
	}
}

const mapDispatchToProps = (dispatch) => {
	/*
	return {
		onChooseEndpoint: (side) => dispatch((dispatch, getState) => {
			dispatch({ type: types.PICK_SIDE, payload: side });
		})
	};
	*/

	return bindActionCreators({
		onChooseEndpoint
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MillenniumFalcon);
