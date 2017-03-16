import React from 'react';

export default class ItemDisplay extends React.PureComponent {

	static propTypes = {
		onExpandToggle: React.PropTypes.func.isRequired,

		children: React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			kind: React.PropTypes.string.isRequired,
			isExpanded: React.PropTypes.bool,
		})
	};

	render() {
		const { children: { name, isExpanded }, onExpandToggle} = this.props;
		return (<span>
			<button className="btn btn-xs btn-default" onClick={onExpandToggle} aria-label={isExpanded ? 'Collapse' : 'Expand'}>
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
