import { assert, expect } from 'chai';
import React from 'react';
import { render } from 'enzyme';
import Della from '../components/ode-to-della.jsx';

describe('ode to della', ()=> {
  it('should render an h4 for each reason passed in', () => {

    let arrayOf5Items = Array.from({length: 5}, (k, i) => i); // [0, 1, 2, 3, ,4]

    const wrapper = render(<Della reasons={arrayOf5Items} />);

    expect(wrapper.find('h4').length).to.equal(5);
  });
  
  it('should have the name Della rendered if no name passed in', ()=> {
    
    const wrapper = render(<Della reasons={[]} />);

    expect(wrapper.find('.name').text()).to.equal('Della');
    
  })
});