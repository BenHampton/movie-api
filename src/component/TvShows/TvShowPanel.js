import React, { Component } from 'react'
import TvShows from "./TvShows";


class TvShowPanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className={'movie-container'}>
                    <TvShows />
                </div>
            </div>
        )
    }
}
export default TvShowPanel;