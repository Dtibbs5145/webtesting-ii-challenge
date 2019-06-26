import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <button onClick={props.incrementStrike}>Add Strike</button>
            <button onClick={props.incrementBall}>Add Ball</button>
            <button onClick={props.incrementFoul}>Add Foul</button>
            <button onClick={props.recordHit}>Hits</button>
        </div>
    )
}

export default Dashboard;