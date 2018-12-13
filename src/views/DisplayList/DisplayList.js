//@TODO i don't like this name and im not sure if we need it.
// right now it's used only for showing content of grocery lists
// but we actually re-created this lists at our separated component and at showcase project.

// This version is bad. it's not the latest version of thing that we can have here.


import React, { Component } from 'react';
import _ from 'lodash';

import {
	getIngredients,
	getGroceryById
} from "../../selectors/selector.js";


class DisplayList extends Component {

	//@TODO move to constructor
	state = {
		loaded: false,
		// test: this.props.location.state.test
	}

	componentDidMount = () =>  {
		this.groceryId3 = getGroceryById(3);
		this.setState({ loaded: true });
		this.ingredients = [];
		//@TODO replace with lodash
		for (var i = 0; i < this.groceryId3[0].departments.length ; i++) {
  			this.ingredients.push(getIngredients(this.groceryId3[0].departments[i]));
		}
	}

	render() {
		return (
			<div>
				{
					this.state.loaded &&
					<div>
					<span>NAME: {this.groceryId3[0].name}</span>
					<span>TEST: {this.state.test}</span>
					</div>
				}
				<ul>
					{
						this.state.loaded &&

						this.groceryId3[0].departments.map((item, index) => {
							return(
								<li>
									<li>{item}</li>
									<ul>
									{
										this.ingredients.map((ingredient) => {
											return(
												<li>{ingredient}</li>
											);
										})
									}
									</ul>
								</li>
							);

						}

						)

					}
				</ul>
			</div>

		);
	}
}

export default DisplayList;
