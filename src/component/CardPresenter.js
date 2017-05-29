import React from 'react';
import { Card } from 'antd';
import buildDeck from './buildDeck';

const CardPresenter = (props) => {
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

	return (
		<div className="cardList">
			{deck}
		</div>
		);
};

export default CardPresenter;