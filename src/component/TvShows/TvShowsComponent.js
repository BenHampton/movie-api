import React, {Component} from 'react';
import {TVServices} from '../../services/TVServices';
import {IMG_URL} from '../Constants/constants'
import {Panel} from '../../../node_modules/primereact/panel'
import {Dialog} from "primereact/components/dialog/Dialog";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import 'primereact/components/lightbox/Lightbox.css'
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Link} from "react-router-dom";
import TvShowsView from "./TvShowsView";

class TvShowsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularTvShows: [],
            layout: 'grid',
            tvShowsTrailerKey: null,
            selectedTvShow: null,
            tvShowIds: null,
            isDialogVisible: false

        }
        this.getMovieDB = new TVServices();
    }
    componentDidMount(){
        this.popularTvShows = this.getMovieDB.getPopularTvShows(this);
    }

    retrieveTvShowId(tvShow){
        this.getMovieDB.getTvShowTrailer(this, tvShow.id);
        return(
            <div>
                coming soon
            </div>
        )
    }

    showTvShowDialog(){
        this.setState( { isDialogVisible: false } )
    };

    renderTvShowHeader() {
        return (
            <div>
                <div style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
                </div>
            </div>
        );
    }

    render(){
        return(
           <TvShowsView popularTvShows={this.state.popularTvShows}
                        isDialogVisible={this.state.isDialogVisible}
                        tvShowIds={this.state.tvShowIds}
                        selectedTvShow={this.state.selectedTvShow}
                        layout={this.state.layout}
                        tvShowsTrailerKey={this.state.tvShowsTrailerKey}
                        renderTvShowHeader={this.renderTvShowHeader.bind(this)}
                        showTvShowDialog={this.showTvShowDialog.bind(this)}
                        retrieveTvShowId={this.retrieveTvShowId.bind(this)}
           />
        )
    }
}
export default TvShowsComponent