import React, { Component } from 'react';
import List from "./Data/item"

export class Quantity extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:1,
        };
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement(){
        if(this.state.counter > 1){
            this.setState(prevState => ({counter: prevState.counter-1}))
        }
    }
    render() {
        return (
            <>
                <div className='quantity'>
                    <h1>Quantity</h1>
                    <div className='increment'>
                        <button className="" id="minus" onClick={this.decrement.bind(this)}>-</button> 
                        <input type="text" id="date" value={this.state.counter}/>
                        <button className="" id="plus" onClick={this.increment.bind(this)}>+</button>
                    </div>
                </div>
            </>
        );
    }
};

export default Quantity;


