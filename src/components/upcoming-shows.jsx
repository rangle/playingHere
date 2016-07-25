import React from 'react';
import ReactDOM from 'react-dom';

export default class Shows extends React.Component {
	
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
		  upcomingShows: this.props.shows
		};
	}

	render = () => 
		<section>
			<div className='wrapper' style={this.myStyle.wrapper} >
				<h2 style={this.myStyle.title} >Upcoming Shows</h2>

				{this.state.upcomingShows.map((show, i) => 
					
					<div key={i}>
						<a href={show.artists[0].url}>
							<h3>{show.artists[0].name}</h3>
						</a>
						<p>{show.datetime}</p>
					</div>
				
				)}


			</div>
		</section>
	}