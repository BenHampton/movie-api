import React, {Component} from 'react';
import {MediaService} from "../../services/MediaService";
import SimilarMediaView from "./SimilarMediaView";

class SimilarMediaComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            similarMedia: props.similarMedia,
            layout: 'grid',
            movieTrailerKey: null,
            selectedMovie: null,
            movieIds: null,
            isDialogVisible: false
        }
        this.getMovieDB = new MediaService();
        this.retrieveMovieId = this.retrieveMovieId.bind(this);
        this.refreshSimPage = this.refreshSimPage.bind(this);
        this.renderSimilarMediaHeader = this.renderSimilarMediaHeader.bind(this);
    }

    componentWillReceiveProps(){
        this.similarMedia = this.getMovieDB.getSimilarMedia(this, this.props.id);
    }

    retrieveMovieId(movie){
        this.getMovieDB.getMovieTrailer(this, movie.id);
        return(
            <div>
                coming soon
            </div>
        )
    }

    renderSimilarMediaHeader() {
        return (
            <h4 className={'similar-header similarMovie-text'}>
                Similar movies related to {this.props.title}
            </h4>
        );
    }

    refreshSimPage(similarMedia){
        this.props.refreshMoviePage(similarMedia);
    }

    render(){
        return(
            <SimilarMediaView similarMedia={this.state.similarMedia}
                              movieIds={this.state.movieIds}
                              isDialogVisible={this.state.isDialogVisible}
                              layout={this.state.layout}
                              selectedMovie={this.state.selectedMovie}
                              movieTrailerKey={this.state.movieTrailerKey}
                              renderSimilarMediaHeader={this.renderSimilarMediaHeader()}
                              refreshSimPage={this.refreshSimPage.bind(this)}
            />
        )
    }
}
export default SimilarMediaComponent