import React, { Component } from 'react';
import List from "./Data/item"

export class Size extends Component {

    render() {
        return (
            <>
                {List.map((x, index) => (
                    <div className='size' key={index}>
                        <h1>Size</h1>
                        <div className='sizes'>
                            <div className='small'>
                                <h6>{x.small}</h6>
                            </div>
                            <div className='small active'>
                                <h6>{x.Medium}</h6>
                            </div>
                            <div className='small'>
                                <h6>{x.Large}</h6>
                            </div>
                            <div className='small'>
                                <h6>{x.XLarge}</h6>
                            </div>
                            <div className='small'>
                                <h6>{x.XXLarge}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
};

export default Size;


