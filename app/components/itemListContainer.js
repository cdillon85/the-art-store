
import React, { Component } from 'react';
import itemList from './itemListComponent';


export default class itemsListContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			paintings: [
				{title: 'Ifafa I', artist: {name: 'Frank Stella' }, year: 1968, url: '', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Pink', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [49.1, 0, 28.2], quantity: 1 },
				{title: 'Ifafa II', artist: {name: 'Frank Stella' }, year: 1968, url: '', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Orange', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [49.1, 0, 28.2], quantity: 1 }
			]
		}}
	


	render() {
		return(
			<div>
				<ul>
				{this.state.paintings.map(painting => 
					<li> 
						<h1> {painting.title} </h1>

					</li>
					)}
				</ul>
			</div>
		)
	}


}