import React, {Component} from 'react';
import {IMG_URL} from '../Constants/constants'
import {Panel} from '../../../node_modules/primereact/panel'
import {Dialog} from "primereact/components/dialog/Dialog";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Link} from "react-router-dom";
import {MediaService} from "../../services/MediaService";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import SimilarMediaView from "./SimilarMediaView";

class SimilarMediaComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            similarMedia: [],
            layout: 'grid',
            movieTrailerKey: null,
            selectedMovie: null,
            movieIds: null,
            isDialogVisible: false
        }
        this.getMovieDB = new MediaService();
        this.retrieveMovieId = this.retrieveMovieId.bind(this);
        this.refreshSimPage = this.refreshSimPage.bind(this);
    }
    componentDidMount(){
        this.similarMedia = this.getMovieDB.getSimilarMedia(this, this.props.id);
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

    renderSimilarMovieHeader() {
        return (
            <h4 className={'similar-header'}>
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
                              header={this.renderSimilarMovieHeader}
                              refreshSimPage={this.refreshSimPage.bind(this)}
            />
        )
    }
}
export default SimilarMediaComponent