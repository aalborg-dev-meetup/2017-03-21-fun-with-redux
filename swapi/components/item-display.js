import React from 'react';

export default class ItemDisplay extends React.PureComponent {

	static propTypes = {
		children: React.PropTypes.shape({
			url: React.PropTypes.string.isRequired,
			name: React.PropTypes.string.isRequired,
			kind: React.PropTypes.string.isRequired,
		})
	};

	state = {
		isExpanded: false,
	};

	handleExpandToggle = () => {
		this.setState((state) => ({ isExpanded: !state.isExpanded }));
	};

	render() {
		const { children: { name }, onExpandToggle} = this.props;
		const { isExpanded } = this.state;

		return (<span>
			<button className="btn btn-xs btn-default" onClick={this.handleExpandToggle} aria-label={isExpanded ? 'Collapse' : 'Expand'}>
				{isExpanded
					? <i className="fa fa-chevron-circle-up" />
					: <i className="fa fa-chevron-circle-down" />}
			</button>
			{' '}
			{name}
			{ isExpanded ? <pre>{JSON.stringify(this.props.children, null, 4)}</pre> : null}
		</span>);
	}
}
