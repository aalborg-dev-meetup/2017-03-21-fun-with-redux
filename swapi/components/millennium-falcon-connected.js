import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import MillenniumFalcon from '../components/millennium-falcon';

import * as actions from '../actions';

const mapStateToProps = (state) => {
	const  { endpoint, data } = state;

	return {
		list: (data && data[endpoint]) || [],
		endpoint: endpoint,
	}
}

const mapDispatchToProps = (dispatch) => {
	const res = bindActionCreators({
		onChooseEndpoint: (side) => (dispatch, getState) => {
			dispatch({ type: actions.PICK_SIDE, payload: side });
		}
	}, dispatch);

	console.log(res);

	return res;
}

export default connect(mapStateToProps, mapDispatchToProps)(MillenniumFalcon);
