import {fromJS, Set} from 'immutable';

const INITIAL_STATE = fromJS({
  list: [
  	{name:'Tiffany', 
  	link:'www.tiffanydanielle.ca', 
  	imgLink:'./images/tiff.jpg', 
  	bio:'Currently a FED in Toronto etc etc'},

  	{name: 'Chanelle', 
  	link:'www.tiffanydanielle.ca', 
  	imgLink:'./images/tiff.jpg', 
  	bio:'Currently a FED in Toronto etc etc'},
  	
  	{name: 'Amy', 
  	link:'amytangcodes.com', 
  	imgLink:'./images/', 
  	bio:'Currently a FED in Toronto etc etc'},
  	
  	{name: 'Janelle', 
  	link:'janellehinds.ca', 
  	imgLink:'./images/', 
  	bio:'Currently a FED in Toronto etc etc'}]

});

export default function contributorReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    default:
      return state;
  }

}