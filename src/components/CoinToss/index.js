import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossImage: 'heads', total: 0, heads: 0, tails: 0}

  updateCounts = randomResult => {
    if (randomResult === 'heads') {
      return this.setState(prevState => ({heads: prevState.heads + 1}))
    }
    return this.setState(prevState => ({tails: prevState.tails + 1}))
  }

  onFlipTossCoin = () => {
    // const randomResult = Math.ceil(Math.random() * 2 - 1)
    const randomResult = Math.random() < 0.5 ? 'heads' : 'tails'
    this.setState(preState => ({total: preState.total + 1}))
    this.setState({tossImage: randomResult})
    this.updateCounts(randomResult)
  }

  render() {
    const {tossImage, total, heads, tails} = this.state
    const imageUrl =
      tossImage === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <>
        <div className="bg-container">
          <div className="coin-toss-card">
            <h1 className="toss-heading">Coin Toss Game</h1>
            <p className="heads-tails-heading">Heads (or) Tails</p>
            <img src={imageUrl} alt="toss result" className="coin-image" />
            <button
              className="toss-button"
              type="button"
              onClick={this.onFlipTossCoin}
            >
              Toss Coin
            </button>
            <div className="count-container">
              <p className="count">Total: {total}</p>
              <p className="count">Heads: {heads}</p>
              <p className="count">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoinToss
