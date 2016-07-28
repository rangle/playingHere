import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
	
	myStyle = {
	  wrapper: {
	    width: '60%',
	    margin: '0 auto'
	  },
	  title: {
	  	'fontSize': '30px'
	  }
	}

	constructor(props){
		super(props);
		this.state = {
		  people: props.contributors
		};
	}

	render = () => 
		<section>
			<div className='wrapper' style={this.myStyle.wrapper} >
				<div>
					<h2 style={this.myStyle.title} >About Us</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, quam facilis fugit error pariatur laboriosam exercitationem nostrum est unde voluptas, perferendis rem optio voluptatem neque!</p>
				</div>

				{this.state.people.map((person, i) => 
					<h4 key={i}>{person.name}</h4>

				)}


			</div>
		</section>
	}