import React, {Component} from 'react';
import {MovieService} from '../../services/MovieService';
import {DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Link} from "react-router-dom";
import MoviesView from "./MoviesView";

class MoviesComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies: [],
            layout: 'grid',
            movieTrailerKey: null,
            selectedMovie: null,
            movieIds: null,
            isDialogVisible: false

        }
        this.getMovieDB = new MovieService();
    }
    componentDidMount(){
        this.popularMovies = this.getMovieDB.getPopularMovies(this);
    }

    retrievePopularMovieId(movie){
        this.getMovieDB.getMovieTrailer(this, movie.id);
        return(
            <div>
                coming soon
            </div>
        )
    }

    renderMovieImageHeader(movie) {
        return (
            <div>
                <Link
                    to={{
                        pathname: "/movie",
                        state: { movie: movie }
                    }} >
                    <div className={'grid-header'}>
                        {movie.title}
                    </div>
                </Link>
            </div>
        );
    }

    showDialog(){
        this.setState({isDialogVisible: false});
    }

    renderMovieHeader() {
        return (
            <div>
                <div style={{textAlign: 'right', color: 'white'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
                </div>
            </div>
        );
    }

    render(){
        return(
            <MoviesView popularMovies={this.state.popularMovies}
                        layout={this.state.layout}
                        movieTrailerKey={this.state.movieTrailerKey}
                        selectedMovie={this.state.selectedMovie}
                        movieIds={this.state.movieIds}
                        isDialogVisible={this.state.isDialogVisible}
                        renderMovieHeader={this.renderMovieHeader.bind(this)}
                        renderMovieImageHeader={this.renderMovieImageHeader.bind(this)}
                        retrievePopularMovieId={this.retrievePopularMovieId.bind(this)}
                        showDiaog={this.showDialog.bind(this)}
            />

        )
    }
}
export default MoviesComponent