import { bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MillenniumFalcon from '../components/millennium-falcon';

import { onChooseEndpoint } from '../actions';

const mapStateToProps = (state) => {
	const  { endpoint, data } = state;

	const list = (data && data[endpoint]) || [];
	console.log(state.operations);
	return {
		list,
		endpoint,
		loading: state.operations > 0,
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onChooseEndpoint: onChooseEndpoint,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MillenniumFalcon);
