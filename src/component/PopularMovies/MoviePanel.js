import React, { Component } from 'react'
import Movies from './Movies';


class MoviePanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className={'movie-container'}>
                    <Movies />
                </div>
            </div>
        )
    }
}
export default MoviePanel;