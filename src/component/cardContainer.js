import React, {Component} from 'react';
import CardPresenter from './CardPresenter';
import buildDeck from './buildDeck';
import { Button } from 'antd';

class CardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mappedDeck: {}
		}
	}
	
	knuthShuffle = (array) => {
		var currentIndex = array.length,
			temporaryValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	deck = () => {
		this.state.mappedDeck = buildDeck().map(function(card) {
		return	<div style={ {height: 100} }>
					<img height="100px" src={'.\\cards\\' + card}  />
				</div>
		});
	}

	render () {
	this.deck();

	return (
		<div>
			<CardPresenter deck={this.state.mappedDeck}/>
			<Button type="default">Shuffle></Button>
			<Button type="default" >Sort></Button>
		</div>
		);
}
};

export default CardContainer;