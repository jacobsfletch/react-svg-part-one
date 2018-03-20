import React, { Component } from 'react';

import Graph from './Graph';

import './index.css';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.arrayX = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];
		this.arrayY = [5, 30, -5, -10, 15, -15, 20, 5, 8, -12, -20, 2, 3, -5, 8, -2, 22, -30, -15, -35, -20];
	}

	componentWillMount() {
		this.generatePolylineArray();
	}

	generatePolylineArray() {
		let polyline = '';
		this.arrayX.map((coordX, i) => {
			return polyline += `${coordX},${this.arrayY[i]} `;
		})
		this.polyline = polyline;
	}

	render() {
		return (
			<div className="chart-body">
				<Graph
					arrayX={this.arrayX}
					arrayY={this.arrayY}
					polyline={this.polyline}
				/>
			</div>
		)
	}
}

export default Chart;
