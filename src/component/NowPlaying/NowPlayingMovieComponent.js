import React, {Component} from 'react';
import {MovieService} from "../../services/MovieService";
import NowPlayingMovieView from "./NowPlayingMovieView";
import {MediaService} from "../../services/MediaService";

class NowPlayingMovieComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            nowPlaying: this.props.location.state.nowPlaying,
            trailer: this.props.location.state.nowPlayingMovieTrailerKey,
            movieReviews: [],
            similarMedia: [],
            hasReviews: true
        }
        this.getMovieDB = new MovieService();
        this.getSimilarMovieDB = new MediaService();
    }

    componentDidMount(){
        this.movieReviews = this.getMovieDB.getMovieReviews(this, this.state.nowPlaying.id);
        this.similarMedia = this.getSimilarMovieDB.getSimilarMedia(this, this.state.nowPlaying.id);

    }

    componentDidUpdate(){
        window.scrollTo(0,0);
    }

    refreshNowPlayingMoviePage(similarMedia){
        this.setState({nowPlaying: similarMedia}, () => {
            this.movieReviews = this.getMovieDB.getMovieReviews(this, this.state.nowPlaying.id);
        });
    }

    render(){
        return(
            <NowPlayingMovieView nowPlayingMovie={this.state.nowPlaying}
                                 trailer={this.state.trailer}
                                 nowPlayingMovieReviews={this.state.movieReviews}
                                 hasReviews={this.state.hasReviews}
                                 refreshMoviePage={this.refreshNowPlayingMoviePage.bind(this)}
                                 similarMedia={this.state.similarMedia}
            />
        )
    }
}
export default NowPlayingMovieComponent