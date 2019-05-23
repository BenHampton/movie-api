import React, {Component} from 'react'
import MoviesComponent from "./MoviesComponent";


class MoviesPanel extends Component{
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
export default MoviesPanel;
