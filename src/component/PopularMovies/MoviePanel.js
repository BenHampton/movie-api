import React, {Component} from 'react'
import MoviesComponent from "./MoviesComponent";


class MoviePanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className={'movie-container'}>
                    <MoviesComponent />
                </div>
            </div>
        )
    }
}
export default MoviePanel;