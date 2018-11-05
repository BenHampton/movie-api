import React, {Component} from 'react'
import MoviesComponent from "./MoviesComponent";


class MoviesPanel extends Component{
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
export default MoviesPanel;