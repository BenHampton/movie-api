import React, {Component} from 'react'
import TvShowsComponent from "./TvShowsComponent";


class TvShowPanel extends Component{
    render(){
        return(
            <div>
                <div className={'movie-container'}>
                    <TvShowsComponent />
                </div>
            </div>
        )
    }
}
export default TvShowPanel;
