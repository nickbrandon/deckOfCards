import React from 'react';
import {shallow} from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
	let cards = ["2_of_clubs.png",
		"2_of_diamonds.png",
		"2_of_hearts.png",
		"2_of_spades.png"
	]

	let cardContainer = shallow(<CardContainer />);

	it('renders the component', () => {
		expect(cardContainer.find('CardPresenter')).toBeTruthy();
	});

	it('creates a deck', () => {
		
	});

	it('shuffles the deck', () => {

	});

	it('sorts the deck', () => {

	});
});