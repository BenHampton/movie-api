import React, {Component} from 'react';
import {MediaService} from "../../services/MediaService";
import SimilarMediaView from "./SimilarMediaView";

class SimilarMediaComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            similarMedia: props.similarMedia,
            layout: 'grid',
            location: props.location.pathname,
            mediaTrailerKey: null,
            selectedMedia: null,
            mediaIds: null,
            isDialogVisible: false
        };
        this.getMovieDB = new MediaService();
        this.retrieveMovieId = this.retrieveMovieId.bind(this);
        this.refreshSimPage = this.refreshSimPage.bind(this);
        this.renderSimilarMediaHeader = this.renderSimilarMediaHeader.bind(this);
    }

    componentWillReceiveProps(){
        if(this.props.location === '/tv-show'){
            this.similarMedia = this.getMovieDB.getSimilarTvMedia(this, this.props.id);
        }else if(this.props.location === '/movie') {
            this.similarMedia = this.getMovieDB.getSimilarMovieMedia(this, this.props.id);
        }
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
                Similar movies related to { this.props.location === './movie' ? this.props.title : this.props.name }
            </h4>
        );
    }

    refreshSimPage(similarMedia){
        this.props.refreshMoviePage(similarMedia);
    }

    render(){
        return(
            <SimilarMediaView similarMedia={this.state.similarMedia}
                              mediaIds={this.state.mediaIds}
                              isDialogVisible={this.state.isDialogVisible}
                              layout={this.state.layout}
                              selectedMedia={this.state.selectedMedia}
                              mediaTrailerKey={this.state.mediaTrailerKey}
                              renderSimilarMediaHeader={this.renderSimilarMediaHeader()}
                              refreshSimPage={this.refreshSimPage.bind(this)}
            />
        )
    }
}
export default SimilarMediaComponent