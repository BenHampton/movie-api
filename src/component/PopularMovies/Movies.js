import React, {Component} from 'react';
import {MovieService} from '../../services/MovieService';
import {IMG_URL} from '../Constants/constants'
import {Panel} from '../../../node_modules/primereact/panel'
import {Dialog} from "primereact/components/dialog/Dialog";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Link} from "react-router-dom";

class Movies extends Component{
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
        this.itemTemplate = this.itemTemplate.bind(this)
        this.retrieveMovieId = this.retrieveMovieId.bind(this);
    }
    componentDidMount(){
        this.popularMovies = this.getMovieDB.getPopularMovies(this);
    }

    isEmpty(item){
        return item === null || item === undefined || item === '';
    }

    itemTemplate(movie, layout) {
        if (!movie) {
            return;
        }
        if (layout === 'list') {
            return this.renderListItem(movie);
        } else if (layout === 'grid'){
            return this.renderImageGrid(movie)
        }
    }

    retrieveMovieId(movie){
        this.getMovieDB.getMovieTrailer(this, movie.id);
        console.log(this.state.movieTrailerKey)
        return(
            <div>
                coming soon
            </div>
        )
    }

    renderListItem(movie) {
        return (
            <div className={'p-grid dataview-listItem'} style={{marginLeft: '10px'}}>
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
                    </div>
                </div>
            </div>
        );
    }



    renderImageHeader(movie) {
        return (
            <div>
                <Link
                    to={{
                        pathname: "/movie",
                        state: { movie: movie }
                    }} >
                    <div style={{fontSize: '18px', maxHeight: '5px', marginBottom: '30px'}}>
                        {movie.title}
                    </div>
                </Link>
            </div>
        );
    }

    renderImageGrid(movie){
        return (
            <div style={{ padding: '.5em' }} className="p-g-12 p-md-3">
                <Panel header={this.renderImageHeader(movie)} style={{ textAlign: 'center'}}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => this.retrieveMovieId(movie)} >
                            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster-grid'}/>
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
                        {/*{movie.title}*/}
                    </div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    {/*<Button icon="pi pi-search" onClick={(e) => this.renderMovieSelected(movie, this.state.movieTrailerKey)}></Button>*/}
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
        console.log(this.state.popularMovies)
        const header = this.renderHeader();
        return(
            <div  className={'content-section implementation'} style={{background: '#F0FFF0'}}>
                <div className={'content-section implementation'}>
                    <DataView value={this.state.popularMovies}
                              layout={this.state.layout}
                              itemTemplate={this.itemTemplate}
                              header={header}
                              className={'p-nogutter'}
                    />
                    <Dialog header="Movie Details"
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
export default Movies