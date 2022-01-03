import React from 'react';
import Card from './Card.js';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props)
    const fronts = [
      '🐷',
      '🎩',
      '👿',
      '🌲',
      '🚑',
      '🍓',
      '💻',
      '🥁',
      '💩',
      '⚽️',
      '👟',
      '🕶',
      
    ]
    const deck = fronts
      .concat(fronts)
      .sort(() => Math.random() - 0.5)
      .map(front => {
        return {
          content: front,
          faceUp: false,
        }
      })
    this.state = {
      deck: deck,
      firstCard: null,
    }
  }

  flipCardTo(cardIdx, faceUp) {
    this.setState({
      deck: this.state.deck.map((front, i) => {
        if(i === cardIdx) {
          return {          
            content: front.content,
            faceUp: !front.faceUp,
          }
        } else {
          return front;
        }
      })
    })
  }

  flip(cardIdx) {
    if(this.state.firstCard === null) {
      this.setState({firstCard: cardIdx});
    } else {
      const firstCardContent = this.state.deck[this.state.firstCard].content;
      const secondCardContent = this.state.deck[cardIdx].content;
      if(firstCardContent === secondCardContent) {
        this.setState({firstCard: null});
      } else {
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false)
          this.flipCardTo(cardIdx, false)
          this.setState({firstCard: null});
        }, 2000)
      }
    }

    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
  }

  render () {
    console.log(this.state.firstCard);
    return (
      this.state.deck.map((front, i) => {
        return (<div className="Board">
          <Card
            flip={() => {this.flip(i)}}
            content={front.content}
            faceUp={front.faceUp} />
        </div>)
      })
    )
  }
}



export default Board;
