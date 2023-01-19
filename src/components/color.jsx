import React, { Component } from 'react';
import List from "./Data/item"

export class Color extends Component {

    render() {
        return (
            <>
                {List.map((x, index) => (
                    <div className='color' key={index}>
                        <h1>Color</h1>
                        <img src={x.color1} className="active" />
                        <img src={x.color2} />
                    </div>
                ))}
            </>
        );
    }
};

export default Color;


