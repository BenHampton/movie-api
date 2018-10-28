import React, {Component} from 'react';
import {MovieService} from "../../services/MovieService";
import MovieView from "./MovieView";

class MovieComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie: this.props.location.state.movie,
            trailer: this.props.location.state.movieTrailerKey,
            movieReviews: [],
            hasReviews: true
        }
        this.getMovieDB = new MovieService();

    }

    componentDidMount(){
        this.movieReviews = this.getMovieDB.getMovieReviews(this, this.state.movie.id);
    }

    componentDidUpdate(){
        window.scrollTo(0,0);
    }

    refreshMoviePage(similarMedia){
        this.setState({movie: similarMedia}, () => {
            this.movieReviews = this.getMovieDB.getMovieReviews(this, this.state.movie.id);
        });
    }

    render(){
        return(
            <MovieView movie={this.state.movie}
                       trailer={this.state.trailer}
                       movieReviews={this.state.movieReviews}
                       hasReviews={this.state.hasReviews}
                       refreshMoviePage={this.refreshMoviePage.bind(this)}

            />
        )
    }
}
export default MovieComponent;