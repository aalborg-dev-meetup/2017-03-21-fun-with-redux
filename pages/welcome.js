import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { Provider } from 'react-redux';

import store from '../swapi/store';
import MillenniumFalconConnected from '../swapi/components/millennium-falcon-connected';

export default class ReduxPage extends React.PureComponent {
	render() {
		return (<Provider store={store}><div>
			<Head>
				<title>Fun With Redux</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />
				<style>{'html { zoom: 3 }'}</style>
			</Head>
			<div className="container">
				<h1>Redux</h1>
				<ul>
					<li>Hej!</li>
					<li>Wouter van Vliet</li>
					<li>Frontend Udvikler</li>
				</ul>
				<div><Link href="/"><a>Start</a></Link></div>
			</div>
		</div></Provider>);
	}
}

