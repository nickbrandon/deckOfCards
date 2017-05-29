import React from 'react';

const CardPresenter = (props) => {
	return (
		<div className="cardList">
			{props.deck}
		</div>
		);
};

export default CardPresenter;