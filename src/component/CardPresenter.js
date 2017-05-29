import React from 'react';
import { Card } from 'antd';

const CardPresenter = (props) => {
	return (
		<div className="cardList">
			{props.deck}
		</div>
		);
};

export default CardPresenter;