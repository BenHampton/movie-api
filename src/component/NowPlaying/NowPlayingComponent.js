import React, {Component} from 'react'
import {MovieService} from "../../services/MovieService";
import {DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import NowPlayingView from "./NowPlayingView";


class NowPlayingComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nowPlaying: [],
            layout: 'grid',
            showReleaseDates: [],
            movieTrailerKey: null,
            selectedNowPlayingMovie: null,
            movieIds: null,
            isDialogVisible: false
        };
        this.getMovieDB = new MovieService();
    }
    componentDidMount(){
        this.nowPlaying = this.getMovieDB.getNowPlaying(this);

    }

    retrieveNowPlayingMovieId(nowPlayingId){
        this.getMovieDB.getMovieTrailer(this, nowPlayingId);

    }

    renderNowPlayingHeader() {
        return (
            <div>
                <div style={{textAlign: 'right', color: 'white'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
                </div>
            </div>
        );
    }

    showNowPlayingDialog(){
        this.setState({isDialogVisible: false});
    }

    render(){
        return(
            <NowPlayingView nowPlaying={this.state.nowPlaying}
                            layout={this.state.layout}
                            showReleaseDates={this.state.showReleaseDates}
                            movieTrailerKey={this.state.movieTrailerKey}
                            selectedNowPlayingMovie={this.state.selectedNowPlayingMovie}
                            movieIds={this.state.movieIds}
                            isDialogVisible={this.state.isDialogVisible}
                            renderNowPlayingHeader={this.renderNowPlayingHeader.bind(this)}
                            showNowPlayingDialog={this.showNowPlayingDialog}
                            retrieveNowPlayingMovieId={this.retrieveNowPlayingMovieId.bind(this)}
            />
        )
    }
}
export default NowPlayingComponent;