import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props)
	}

	// event handlers

	render() {
		return(
			<div>
				<h2>{this.props.items.subject}</h2>
				<ul>
					{this.props.items.resources.map((resource) => { 
						return(
							<li>
								<a href="{resource.title}">{resource.title}</a>
							</li>
						)} 
					)}
					
				</ul>
			</div>
		)
	}
}