import React, {Component} from 'react';
import {TVServices} from '../../services/TVServices';
import {IMG_URL} from '../Constants/constants'
import {Panel} from '../../../node_modules/primereact/panel'
import {Dialog} from "primereact/components/dialog/Dialog";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import 'primereact/components/lightbox/Lightbox.css'
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Link} from "react-router-dom";

class TvShows extends Component{
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
        this.itemTemplate = this.itemTemplate.bind(this)
        this.retrieveTvShowId = this.retrieveTvShowId.bind(this);
    }
    componentDidMount(){
        this.popularTvShows = this.getMovieDB.getPopularTvShows(this);
    }

    isEmpty(item){
        return item === null || item === undefined || item === '';
    }

    itemTemplate(tvShow, layout) {
        if (!tvShow) {
            return;
        }
        if (layout === 'list') {
            return this.renderListItem(tvShow);
        } else if (layout === 'grid'){
            return this.renderImageGrid(tvShow)
        }
    }

    retrieveTvShowId(tvShow){
        this.getMovieDB.getTvShowTrailer(this, tvShow.id);
        console.log(this.state.tvShowsTrailerKey)
        return(
            <div>
                coming soon
            </div>
        )
    }

    renderListItem(tvShow) {
        return (
            <div className={'p-grid dataview-listItem'} style={{marginLeft: '10px'}}>
                <div className={'p-col-3'}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => this.retrieveTvShowId(tvShow)} >
                            <img src={`${IMG_URL}${tvShow.poster_path}`} alt={tvShow.original_name} className={'image-poster'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + this.state.tvShowsTrailerKey}
                                    frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </Lightbox>



                </div>
                <div>
                    <div className={'p-col movieList-text'}>
                        <div>Title: <b>{tvShow.name}</b></div>
                        <div>Genre: <b>{tvShow.genre_ids}</b></div>
                    </div>
                </div>
            </div>
        );
    }



    renderImageHeader(tvShow) {
        return (
            <div>
                <Link
                    to={{
                        pathname: "/tv-show",
                        state: { tvShow: tvShow }
                    }} >
                    <div style={{fontSize: '18px', maxHeight: '5px', marginBottom: '30px'}}>
                        {tvShow.name}
                    </div>
                </Link>
            </div>
        );
    }

    renderImageGrid(tvShow){
        return (
            <div style={{ padding: '.5em' }} className="p-g-12 p-md-3">
                <Panel header={this.renderImageHeader(tvShow)} style={{ textAlign: 'center'}}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => this.retrieveTvShowId(tvShow)}>
                            <img src={`${IMG_URL}${tvShow.poster_path}`} alt={tvShow.original_name} className={'image-poster-grid'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + this.state.tvShowsTrailerKey}
                                    frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </Lightbox>
                    <div className="car-detail">
                        {/*{tvShow.name}*/}
                    </div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    {/*<Button icon="pi pi-search" onClick={(e) => this.renderMovieSelected(tvShow, this.state.movieTrailerKey)}></Button>*/}
                </Panel>
            </div>
        );
    }



    renderCarDialogContent() {
        if (this.state.selectedTvShow) {
            return (
                <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>
                    <div className="p-col-12" style={{textAlign: 'center'}}>
                        <img src={`${IMG_URL}${this.state.selectedTvShow.poster_path}`} alt={this.state.selectedTvShow.brand} className={'image-poster'}/>
                    </div>
                    <div className="p-col-4">Title: </div>
                    <div className="p-col-8">{this.state.selectedTvShow.name}</div>
                    <div className="p-col-4">Year: </div>
                    <div className="p-col-8">{this.state.selectedTvShow.genre_ids}</div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    renderHeader() {
        return (
            <div>
                <div style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
                </div>
            </div>
        );
    }

    render(){
        const header = this.renderHeader();
        return(
            <div  className={'content-section implementation'} >
                <div className={'content-section implementation'}>
                    <DataView value={this.state.popularTvShows}
                              layout={this.state.layout}
                              itemTemplate={this.itemTemplate}
                              header={header}
                              className={'p-nogutter'}
                    />
                    <Dialog header="Tv Show Details"
                            visible={this.state.isDialogVisible}
                            width="225px"
                            modal={true}
                            onHide={() => this.setState({isDialogVisible: false})}>
                        <div>
                            {this.renderCarDialogContent()}
                        </div>
                    </Dialog>
                </div>
            </div>
        )
    }
}
export default TvShows