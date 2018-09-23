import React , {Component} from 'react';
import {MovieService} from "../../services/MovieService";

class Genres extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieGenres: [],
            tvGenres: []
        }
        this.getMovieGenres = new MovieService();
        this.getTVGenres = new MovieService();
    }

    componentDidMount(){
        this.movieGenres = this.getMovieGenres.getMovieGenres(this);
        this.tvGenres = this.getTVGenres.getTVGenres(this);
    }
    render(){
        return(
            <div>
                <h3>Movie Genres</h3>
                <div>

                </div>
            </div>
        )
    }
}
export default Genres;