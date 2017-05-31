import React from 'react';
import {shallow} from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
	let cards = [
		"2_of_clubs.png",
		"2_of_diamonds.png",
		"2_of_hearts.png",
		"2_of_spades.png",
		"3_of_clubs.png",
		"3_of_diamonds.png",
		"3_of_hearts.png",
		"3_of_spades.png",
		"4_of_clubs.png",
		"4_of_diamonds.png",
		"4_of_hearts.png",
		"4_of_spades.png"
	]

	let cardContainer = shallow(<CardContainer />);

		it('renders the component', () => {
			expect(cardContainer.find('CardPresenter')).toBeTruthy();
		});
	
		it('creates a deck', () => {
			let props = cardContainer.instance().mapCards(cards);
			expect(props).toHaveLength(12);
		});
	
		it('shuffles the deck', () => {
			let originalDeck = cards.slice();
			let shuffledDeck = cardContainer.instance().knuthShuffle(cards);
			expect(shuffledDeck).toEqual(expect.arrayContaining(originalDeck));
			expect(shuffledDeck === originalDeck).toBeFalsy();
		});
});