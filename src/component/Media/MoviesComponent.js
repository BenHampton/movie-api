import React, {Component} from 'react';
import {MovieService} from '../../services/MovieService';
import MoviesView from "./MoviesView";

class MoviesComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            layout: 'grid',
            movieTrailerKey: null,
            selectedMovie: null,
            isDialogVisible: false

        }
        this.getMovieDB = new MovieService();
    }
    componentDidMount(){
        if (window.location.pathname === '/movies') {
            this.movies = this.getMovieDB.getMoviesData(this);
        } else if (window.location.pathname === '/now-playing'){
            this.movies = this.getMovieDB.getNowPlaying(this);
        }
    }

    retrieveMoviePreview(movieId){
        this.getMovieDB.getMovieTrailer(this, movieId);
        return(
            <div>
                coming soon
            </div>
        )
    }

    showDialog(){
        this.setState({isDialogVisible: false});
    }

    updateMovieLayout(layout){
        this.setState({ layout: layout });
    }

    render(){
        return(
            <MoviesView movies={this.state.movies}
                        layout={this.state.layout}
                        movieTrailerKey={this.state.movieTrailerKey}
                        selectedMovie={this.state.selectedMovie}
                        isDialogVisible={this.state.isDialogVisible}
                        updateMovieLayout={this.updateMovieLayout.bind(this)}
                        retrieveMoviePreview={this.retrieveMoviePreview.bind(this)}
                        showDiaog={this.showDialog.bind(this)}
            />

        )
    }
}
export default MoviesComponent