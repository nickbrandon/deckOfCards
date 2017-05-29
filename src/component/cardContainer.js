import React, {Component} from 'react';
import CardPresenter from './CardPresenter';
import cards from './buildDeck';
import { Button } from 'antd';

class CardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mappedDeck: {}
		}

		this.createDeck();
	}

	cardList = () => {
		return cards();
	};
	
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

	mapCards = (cards) => {
		return cards.map(function(card) {
		return	<div key={card} style={ {height: 100} }>
					<img height="100px" src={'.\\cards\\' + card}  />
				</div>
		});
	}

	createDeck = () => {
		let tempCards = this.mapCards(this.cardList());
		this.state.mappedDeck = tempCards;
	}

	shuffleDeck = () => {
		let shuffled = this.knuthShuffle(this.mapCards(this.cardList()));
		this.setState({
			mappedDeck: shuffled
		});
	}

	sortDeck = () => {
		let sortedListOfCards = this.cardList();
		let sorted = this.mapCards(sortedListOfCards);
		this.setState({
			mappedDeck: sorted
		})
	}

	render () {
	return (
		<div>
			<CardPresenter deck={this.state.mappedDeck}/>
			<Button type="default" style={{margin: 10}} onClick={this.shuffleDeck}>Shuffle></Button>
			<Button type="default" onClick={this.sortDeck}>Sort></Button>
		</div>
		);
}
};

export default CardContainer;