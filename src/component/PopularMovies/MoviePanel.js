import React, { Component } from 'react'
import Movies from './Movies';
import './css/movie.css';

class MoviePanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={"p-grid"}>
                <div>
                    <div className={"p-col box"} style={{marginTop: '15%', marginLeft: '30%'}}></div>
                    <div className={"p-col"}>
                        <div className={"box"}>
                            <Movies />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MoviePanel;