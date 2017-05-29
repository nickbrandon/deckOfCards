import React from 'react';
import CardPresenter from './CardPresenter';
import buildDeck from './buildDeck';
import { Card } from 'antd';

function knuthShuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

let cards = buildDeck();

let deck = cards.map(function(card) {
	return	<div>
				<Card title="" >
					<div style={ {height: 100} }>
						<img height="100px" src={'.\\cards\\' + card}  />
					</div>
				</Card>
			</div>
	});

const CardContainer = () => {
	return (
		<CardPresenter deck={deck}/>
		);
};

export default CardContainer;