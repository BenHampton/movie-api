import React from 'react';
import {IMG_URL} from "../Constants/constants";
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Panel} from "primereact/components/panel/Panel";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import {Link} from "react-router-dom";

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

    this.updateMovieLayout = () => {
        return (
            <div>
                <div style={{ textAlign: 'right', color: 'white' }}>
                    <DataViewLayoutOptions layout={ props.layout } onChange={(e) => props.updateMovieLayout(e.value)} />
                </div>
            </div>
        );
    };

    const renderMovieImageHeader = (movie) => {
        let path;
        if (window.location.pathname === '/movies') {
            path = '/movie';
        } else if (window.location.pathname === '/now-playing'){
            path = '/now-playing-movie';
        }else{
            path = '/home';
        }

        return (
            <div>
                <Link
                    to={{
                        pathname: path,
                        state: { movie: movie }
                    }} >
                    <div className={'grid-header'}>
                        {movie.title}
                    </div>
                </Link>
            </div>
        );
    };

    const renderListItem = (movie) => {
        return (
            <div className={'p-grid dataview-listItem'} style={{marginLeft: '10px'}}>
                <div className={'p-col-3'}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrieveMoviePreview(movie.id)} >
                            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster-grid'}/>
                        </a>
                            {props.movieTrailerKey ?
                                <iframe title="Video"
                                        width="560"
                                        height="315"
                                        src={"https://www.youtube.com/embed/" + props.movieTrailerKey}
                                        frameBorder="0"
                                        allowFullScreen>
                                </iframe>
                                : ''
                            }
                    </Lightbox>
                </div>
                <div className={'p-col-9'}>
                    <div className={'list-text-container'}>
                        <div className={'list-text movies-list-text'}>Title: <b>{movie.title}</b></div>
                        <div className={'list-text movies-list-text'}>Rating: <b></b></div>
                        <div className={'list-text  movies-list-text'}>Genre: <b>{movie.genre_ids}</b></div>
                        <div className={'list-text movies-list-text'}>Stars: <b>{movie.vote_average}</b></div>
                        <div>
                            <div className={'list-text movies-list-text'}>
                                Overview:
                            </div>
                            <div className={"overview-container"}>
                                <ScrollPanel className={"list-overview-scrollPane"}>
                                    <div className={'list-text-overview movies-list-text'}>
                                        <b>{movie.overview}</b>
                                    </div>
                                </ScrollPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const renderImageGrid = (movie) => {
        return (
            <div style={{ padding: '.5em' }} className="p-g-12 p-md-3">
                <Panel header={renderMovieImageHeader(movie)} style={{ textAlign: 'center'}}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrieveMoviePreview(movie.id)} >
                            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster-grid'}/>
                        </a>
                        <div>
                            {props.movieTrailerKey ?
                                <iframe title="Video"
                                        width="560"
                                        height="315"
                                        src={"https://www.youtube.com/embed/" + props.movieTrailerKey}
                                        frameBorder="0">
                                </iframe>
                                : ''
                            }
                        </div>
                    </Lightbox>
                    <div className="car-detail">
                    </div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                </Panel>
            </div>
        );
    }

    // const renderDialogContent = (event) => {
    //     if (props.selectedMovie) {
    //         return (
    //             <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>
    //                 <div className="p-col-12" style={{textAlign: 'center'}}>
    //                     <img src={`${IMG_URL}${props.selectedMovie.poster_path}`} alt={props.selectedMovie.brand} className={'image-poster'}/>
    //                 </div>
    //                 <div className="p-col-4">Title: </div>
    //                 <div className="p-col-8">{props.selectedMovie.title}</div>
    //                 <div className="p-col-4">Year: </div>
    //                 <div className="p-col-8">{props.selectedMovie.genre_ids}</div>
    //             </div>
    //         );
    //     }
    //     else {
    //         return null;
    //     }
    // }

    return(
        <div className={"movies"}>
            <div  className={'content-section implementation'}>
                <div className={'content-section implementation'}>
                    <DataView value={props.movies}
                              layout={props.layout}
                              itemTemplate={itemTemplate}
                              header={this.updateMovieLayout()}
                              className={'p-nogutter'}
                    />
                    {/*<Dialog header="Movie Details"*/}
                            {/*visible={props.isDialogVisible}*/}
                            {/*width="225px"*/}
                            {/*modal={true}*/}
                            {/*onHide={() => props.showDialog}>*/}
                        {/*<div>*/}
                            {/*{renderDialogContent()}*/}
                        {/*</div>*/}
                    {/*</Dialog>*/}
                </div>
            </div>
        </div>
    )
}
export default MoviesView;