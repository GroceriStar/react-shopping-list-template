import React, { Component } from 'react';
import { getIngredients } from "../selectors/selector.js";
class DisplayList extends Component {

	state={
		loaded: false
	}

	componentDidMount = () =>  {
		const department = this.props.match.params;
		console.log(department);
		this.groceryId3 = gf.getGroceryById(3);
		this.setState({loaded: true});
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
					<span>NAME: {this.groceryId3[0].name}</span>
				}
				<ul>
					{
						this.state.loaded &&

						this.groceryId3[0].departments.map((item, index) =>{
							return(
								<li>
									<li>{item}</li>
									<ul>
									{
										this.ingredients.map((ingredient)=>{
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
