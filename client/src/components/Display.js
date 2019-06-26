import React from 'react';
import Dashboard from './Dashboard';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.status = {
            strike: 0,
            ball: 0
        }
    }

    incrementStrike = () => {
        if (this.state.strike < 2) {
            return (
                this.setState(prevState => ({
                    strike: ++prevState.strike
                }))
            )
        } else {
            return (
                this.setState(() => ({
                    strike: 0,
                    ball: 0
                }))
            )
        }
    }

    incrementBall = () => {
        if (this.state.ball < 3) {
            return (
                this.setState(prevState => ({
                    ball: ++prevState.ball
                }))
            )
        } else {
            return (
                this.setState(() => ({
                    strike: 0,
                    ball: 0
                }))
            )
        }
    }

    incrementFoul = () => {
        if (this.state.strike < 2) {
            return (
                this.setState(prevState => ({
                    strike: ++prevState.strike
                }))
            )
        }

    }

    recordHit = () => {
        this.setState(() => ({
            strike: 0,
            ball: 0
        }))
    }

    render() {
        return (
            <div>
                <h2>Up To Ball:</h2>
                <div>
                    <div>
                        <h3>Strikes</h3>
                        <h2>{this.state.strike}</h2>
                    </div>
                    <div>
                        <h3>Balls</h3>
                        <h2>{this.state.ball}</h2>
                    </div>
                </div>
                <Dashboard
                    incrementStrike={this.incrementStrike}
                    incrementBall={this.incrementBall}
                    incrementFoul={this.incrementFoul}
                    recordHit={this.recordHit}
                />
            </div>
        )
    }
}

export default Display;