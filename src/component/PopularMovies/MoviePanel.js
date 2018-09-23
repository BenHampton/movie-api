import React, { Component } from 'react'
import Movies from './Movies';
import './css/movie.css';

class MoviePanel extends Component{
    render(){
        return(
            <div className={"movieContainer"}>
                    <div className={"movieBox"}>
                        <div >
                            <Movies />






                        </div>
                    </div>
                </div>
        )
    }
}
export default MoviePanel;