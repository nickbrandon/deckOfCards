import React from 'react';
import { Card } from 'antd';
import buildDeck from './buildDeck';

const CardPresenter = (props) => {
	let cards = buildDeck();

	let deck = cards.map(function(card) {
		return	<Card title="" style={{ height: 10 }} bodyStyle={{ padding: 0 }}>
					<img src={'.\\cards\\' + card}  />
				</Card>
	});

	return (
		<div>
			{deck}
		</div>
			// <Card title="Card" style={{ height: 10 }} bodyStyle={{ padding: 0 }}>
			// 	<img src={'.\\cards\\' + cards[0]} />
			// </Card>
		);
};

export default CardPresenter;