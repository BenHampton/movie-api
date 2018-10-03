import React, { Component } from 'react'
import {IMG_URL} from "../Constants/constants";
import {MovieService} from "../../services/MovieService";
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Button} from "primereact/components/button/Button";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {Panel} from "primereact/components/panel/Panel";
import {Dialog} from "primereact/components/dialog/Dialog";

class NowPlaying extends Component{
    constructor(props){
        super(props);
        this.state = {
            nowPlaying: [],
            layout: 'list',
            showReleaseDates: [],
            movieTrailerKey: null,
            selectedNowPlayingMovie: null,
            movieIds: null,
            isDialogVisible: false
        }

        this.getMovieDB = new MovieService();
        this.itemTemplate = this.itemTemplate.bind(this)
        this.retrieveMovieId = this.retrieveMovieId.bind(this);
        this.renderListItem = this.renderListItem.bind(this);
    }
    componentDidMount(){
        this.nowPlaying = this.getMovieDB.getNowPlaying(this, (data) => {
            this.getMovieDB.getDetailsAppendingRelease(this, data);
        });
    }

    itemTemplate(nowPlaying, layout) {
        if (!nowPlaying) {
            return;
        }
        if (layout === 'list') {
            return this.renderListItem(nowPlaying);
        } else if (layout === 'grid'){
            return this.renderGridItem(nowPlaying)
        }
    }

    retrieveMovieId(nowPlayingId){
        this.getMovieDB.getMovieTrailer(this, nowPlayingId);

    }

    renderListItem(nowPlaying) {
        return (
            <div style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}} className={'p-grid'}>
                <div className={'p-col-3'}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => this.retrieveMovieId(nowPlaying.id)} >
                            <img src={`${IMG_URL}${nowPlaying.poster_path}`} alt={nowPlaying.original_title} className={'image-poster'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + this.state.movieTrailerKey}
                                    frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </Lightbox>
                </div>
                <div>
                    <div className={'p-col'}>
                        <div>Title: <b>{nowPlaying.title}</b></div>
                        <div>Genre: <b>{nowPlaying.genre_ids}</b></div>
                        <div>Stars: <b>{nowPlaying.vote_average}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(nowPlaying) {
        return (
            <div style={{ padding: '.5em'}} className="p-g-12 p-md-3">
                <Panel header={nowPlaying.title} style={{ textAlign: 'center' }}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => this.retrieveMovieId(nowPlaying)} >
                            <img src={`${IMG_URL}${nowPlaying.poster_path}`} alt={nowPlaying.original_title} className={'image-poster'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + this.state.movieTrailerKey}
                                    frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </Lightbox>
                    <div className="car-detail">
                        {/*{nowPlaying.title} - {nowPlaying.genre_ids}*/}
                    </div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    <Button icon="pi pi-search" onClick={(e) => this.setState({ selectedNowPlayingMovie: nowPlaying, isDialogVisible: true })}></Button>
                </Panel>
            </div>
        );
    }
    renderCarDialogContent() {
        if (this.state.selectedNowPlayingMovie) {
            return (
                <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>
                    <div className="p-col-12" style={{textAlign: 'center'}}>
                        <img src={`${IMG_URL}${this.state.selectedNowPlayingMovie.poster_path}`} alt={this.state.selectedNowPlayingMovie.brand} className={'image-poster'}/>
                    </div>
                    <div className="p-col-4">Title: </div>
                    <div className="p-col-8">{this.state.selectedNowPlayingMovie.title}</div>
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
            <div>
                <div>
                    <div className={'content-section implementation'}>
                        <DataView value={this.state.nowPlaying}
                                  layout={this.state.layout}
                                  itemTemplate={this.itemTemplate}
                                  header={header}
                        />
                        <Dialog visible={this.state.isDialogVisible}
                                width="225px"
                                modal={true}
                                onHide={() => this.setState({isDialogVisible: false})}>
                            {this.renderCarDialogContent()}
                        </Dialog>
                    </div>
                </div>

            </div>
        )
    }
}
export default NowPlaying;