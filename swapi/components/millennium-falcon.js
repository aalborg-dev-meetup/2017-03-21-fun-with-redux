import React from 'react';
import classNames from 'classnames';
import ItemDisplay from './item-display';

export default class MillenniumFalcon extends React.PureComponent {

	static propTypes = {
		onChooseEndpoint: React.PropTypes.func.isRequired,
		list: React.PropTypes.arrayOf(React.PropTypes.shape({
			url: React.PropTypes.string.isRequired,
		})).isRequired,
		side: React.PropTypes.string,
	};

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
			<br /><br />
			<table className="table"><tbody>
					{list.map((item) => <tr key={item.url}><td><ItemDisplay>{item}</ItemDisplay></td></tr>)}
				</tbody>
			</table>
		</div>);
	}
}
