import React from 'react';
import {IMG_URL} from "../Constants/constants";
import {Dialog} from "primereact/components/dialog/Dialog";
import {DataView} from "primereact/components/dataview/DataView";
import {Panel} from "primereact/components/panel/Panel";
import {Lightbox} from "primereact/components/lightbox/Lightbox";

const MoviesView = props => {

    const itemTemplate = (movie, layout) => {
        if (!movie) {
            return;
        }
        if (layout === 'list') {
            return renderListItem(movie);
        } else if (layout === 'grid'){
            return renderImageGrid(movie)
        }
    }

    const renderListItem = (movie) => {
        return (
            <div className={'p-grid dataview-listItem'} style={{marginLeft: '10px'}}>
                <div className={'p-col-3'}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrievePopularMovieId(movie)} >
                            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + props.movieTrailerKey}
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

    const renderImageGrid = (movie) => {
        return (
            <div style={{ padding: '.5em' }} className="p-g-12 p-md-3">
                <Panel header={props.renderMovieImageHeader(movie)} style={{ textAlign: 'center'}}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrievePopularMovieId(movie)} >
                            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster-grid'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + props.movieTrailerKey}
                                    frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </Lightbox>
                    <div className="car-detail">
                    </div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                </Panel>
            </div>
        );
    }

    const renderDialogContent = (event) => {
        if (props.selectedMovie) {
            return (
                <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>
                    <div className="p-col-12" style={{textAlign: 'center'}}>
                        <img src={`${IMG_URL}${props.selectedMovie.poster_path}`} alt={props.selectedMovie.brand} className={'image-poster'}/>
                    </div>
                    <div className="p-col-4">Title: </div>
                    <div className="p-col-8">{props.selectedMovie.title}</div>
                    <div className="p-col-4">Year: </div>
                    <div className="p-col-8">{props.selectedMovie.genre_ids}</div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    return(
        <div>
            <div  className={'content-section implementation'} style={{background: '#F0FFF0'}}>
                <div className={'content-section implementation'}>
                    <DataView value={props.popularMovies}
                              layout={props.layout}
                              itemTemplate={itemTemplate}
                              header={props.renderMovieHeader}
                              className={'p-nogutter'}
                    />
                    <Dialog header="Movie Details"
                            visible={props.isDialogVisible}
                            width="225px"
                            modal={true}
                            onHide={() => props.showDialog}>
                        <div>
                            {renderDialogContent()}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
export default MoviesView;