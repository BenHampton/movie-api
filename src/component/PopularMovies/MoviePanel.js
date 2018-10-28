import React, { Component } from 'react'
import Movies from './Movies';
import MoviesComponent from "./MoviesComponent";


class MoviePanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className={'movie-container'}>
                    {/*<Movies />*/}
                    <MoviesComponent />
                </div>
            </div>
        )
    }
}
export default MoviePanel;