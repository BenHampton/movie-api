import React, { Component } from 'react'
import TvShows from "./TvShows";
import TvShowsComponent from "./TvShowsComponent";


class TvShowPanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className={'movie-container'}>
                    {/*<TvShows />*/}
                    <TvShowsComponent />
                </div>
            </div>
        )
    }
}
export default TvShowPanel;