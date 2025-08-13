import React, { Component } from 'react';



class LifeCycleContainer extends Component {
    render() {
        return (
            <div>
                <div>
                    <div ref={(el) => this.colorRef = el}>
                        <h1>{this.state.number}</h1>
                    </div>
                </div>
                <button onClick={this.onClickToIncrease}></button>
            </div>
        );
    }
}

export default LifeCycleContainer;