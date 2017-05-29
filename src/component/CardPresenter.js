import React from 'react';
import { Card } from 'antd';
import buildDeck from './buildDeck';

const CardPresenter = (props) => {
	let cards = buildDeck();

	function drawCard(image) {
			return (
			<Card title="Card" style={{ height: 10 }} bodyStyle={{ padding: 0 }}>
				<img src={cards[0]} />
			</Card>
			);
		};
	}

	return (
			cards.map(drawCard);
		);
};

export default CardPresenter;