import React from 'react';
import classNames from 'classnames';

export default class MillenniumFalcon extends React.PureComponent {

	static propTypes = {
		onChooseEndpoint: React.PropTypes.func.isRequired,
		list: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
		})).isRequired,
		side: React.PropTypes.string,
	}

	handleChooseLight = () => this.props.onChooseEndpoint(SIDE_LIGHT);
	handleChooseDark = () => this.props.onChooseEndpoint(SIDE_DARK);

	render() {
		const { side, loading, list, onChooseEndpoint } = this.props;

		const iconClass = classNames('fa', {
			'fa-refresh': loading,
			'fa-spin': loading,
			'fa-star': !loading,
		});

		return (<div>
			<p><i className={iconClass} /> Pick your side</p>
			<div className="btn-group">
				<button disabled={loading} onClick={() => onChooseEndpoint('people')} className="btn btn-danger">People</button>
				<button disabled={loading} onClick={() => onChooseEndpoint('films')} className="btn btn-danger">Films</button>
			</div>
			<ul>
				{list.map((item) => <li>{item.name}</li>)}
			</ul>
		</div>);
	}
}
