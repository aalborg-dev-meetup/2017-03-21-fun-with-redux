import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

import MillenniumFalcon from '../swapi/components/millennium-falcon';

export default class IndexPage extends React.PureComponent {

	state = {
		endpoint: null,
		list: [],
		loading: false,
	}

	handleChooseEndpoint = (endpoint) => {
		this.setState({ endpoint, loading: true });

		fetch('http://swapi.co/api/' + endpoint)
			.then((response) => response.json())
			.then((data) => data.results.map((item) => ({ ...item, name: item.title || item.name })))
			.then((list) => {
				this.setState({ list, loading: false });
			});
	}

	render() {
		const { endpoint, list, loading } = this.state;
		const { onChooseEndpoint } = this.props;

		return (<div>
			<Head>
				<title>Fun With Redux</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />
			</Head>
			<div className="container">
				<h1>No Fun Without Redux</h1>
				<MillenniumFalcon endpoint={endpoint} list={list} loading={loading}  onChooseEndpoint={this.handleChooseEndpoint} />
				<div><Link href="/redux"><a>Go Redux</a></Link></div>
			</div>
		</div>);
	}
}
