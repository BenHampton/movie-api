import React ,{ Component} from 'react';
import {MovieService} from '../../services/MovieService';
import {IMG_URL} from '../Constants/constants'
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Button} from "primereact/components/button/Button";
import {Panel} from '../../../node_modules/primereact/panel'
import {Dialog} from "primereact/components/dialog/Dialog";
import {Lightbox} from "primereact/components/lightbox/Lightbox";

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies: [],
            movieTrailerKey: null,
            layout: 'list',
            selectedMovie: null,
            isDialogVisible: false

        }
        this.getMovieDB = new MovieService();
        this.itemTemplate = this.itemTemplate.bind(this)
        this.retrieveMovieId = this.retrieveMovieId.bind(this);
    }
    componentDidMount(){
        this.popularMovies = this.getMovieDB.getPopularMovies(this);
    }

    itemTemplate(movie, layout) {
        if (!movie) {
            return;
        }
        if (layout === 'list') {
            return this.renderListItem(movie);
        } else if (layout === 'grid'){
            return this.renderGridItem(movie)
            }
    }

    retrieveMovieId(movie){
        this.getMovieDB.getMovieTrailer(this, movie.id);
    }
    renderListItem(movie) {
        return (
            <div style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}} className={'p-grid'}>
                <div className={'p-col-3'}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => this.retrieveMovieId(movie)} >
                            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster'}/>
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
                    <div className={'p-col movieList-text'}>
                        <div>Title: <b>{movie.title}</b></div>
                        <div>Genre: <b>{movie.genre_ids}</b></div>
                        <div>Stars: <b>{movie.vote_average}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(movie) {
        return (
                <div style={{ padding: '.5em' }} className="p-g-12 p-md-3">
                    <Panel header={movie.title} style={{ textAlign: 'center' }}>
                        <Lightbox type={'content'}>
                            <a className={'group'} onClick={(e) => this.retrieveMovieId(movie)} >
                                <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster'}/>
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
                            {movie.title} - {movie.genre_ids}
                        </div>
                        <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                        <Button icon="pi pi-search" onClick={(e) => this.setState({ selectedMovie: movie, isDialogVisible: true })}></Button>
                    </Panel>
                </div>
        );
    }
    renderCarDialogContent() {
        if (this.state.selectedMovie) {
            return (
                <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>
                    <div className="p-col-12" style={{textAlign: 'center'}}>
                        <img src={`${IMG_URL}${this.state.selectedMovie.poster_path}`} alt={this.state.selectedMovie.brand} className={'image-poster'}/>
                    </div>
                    <div className="p-col-4">Title: </div>
                    <div className="p-col-8">{this.state.selectedMovie.title}</div>
                    <div className="p-col-4">Year: </div>
                    <div className="p-col-8">{this.state.selectedMovie.genre_ids}</div>
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
                        <DataView value={this.state.popularMovies}
                                  layout={this.state.layout}
                                  itemTemplate={this.itemTemplate}
                                  header={header}
                        />
                        <Dialog header="Movie Details"
                                visible={this.state.isDialogVisible}
                                width="225px"
                                modal={true}
                                minY={70}
                                maximizable={true}
                                blockScroll={true}
                                onHide={() => this.setState({isDialogVisible: false})}>
                            {this.renderCarDialogContent()}
                        </Dialog>
                    </div>
                </div>

            </div>
        )
    }
}
export default Movies