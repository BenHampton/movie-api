import React from 'react';
import {DataView} from "primereact/components/dataview/DataView";
import {IMG_URL} from "../Constants/constants";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {Panel} from "primereact/components/panel/Panel";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import {Dialog} from "primereact/components/dialog/Dialog";
import {Link} from "react-router-dom";


const NowPlayingView = props => {

    const itemTemplate = (nowPlaying, layout) => {
        if (!nowPlaying) {
            return;
        }
        if (layout === 'list') {
            return renderListItem(nowPlaying);
        } else if (layout === 'grid'){
            return renderGridItem(nowPlaying)
        }
    }

    const renderNowPlayingGridHeader = (nowPlaying) => {
        return (
            <div>
                <Link
                    to={{
                        pathname: "/now-playing-movie",
                        state: { nowPlaying: nowPlaying }
                    }} >
                    <div style={{fontSize: '18px', maxHeight: '5px', marginBottom: '30px'}}>
                        {nowPlaying.title}
                    </div>
                </Link>
            </div>
        );
    }

    const renderListItem = (nowPlaying) => {
        return (
            <div style={{padding: '2em', borderBottom: '1px solid #d9d9d9', marginLeft: '10px'}} className={'p-grid dataview-listItem'}>
                <div className={'p-col-3'}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrieveNowPlayingMovieId(nowPlaying.id)} >
                            <img src={`${IMG_URL}${nowPlaying.poster_path}`} alt={nowPlaying.original_title} className={'image-poster'}/>
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
                <div className={'p-col-9'}>
                    <div className={'list-text-container'}>
                        <div className={'list-text nowPlaying-text'}>Title: <b>{nowPlaying.title}</b></div>
                        <div className={'list-text nowPlaying-text'}>Genre: <b>{nowPlaying.genre_ids}</b></div>
                        <div className={'list-text nowPlaying-text'}>Stars: <b>{nowPlaying.vote_average}</b></div>
                        <div>
                            <div className={'list-text nowPlaying-text'}>
                                Overview:
                            </div>
                            <div className={"overview-container nowPlaying-text"}>
                                <ScrollPanel className={"list-overview-scrollPane"}>
                                    <div className={'list-text-overview'}>
                                        <b>{nowPlaying.overview}</b>
                                    </div>
                                </ScrollPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (nowPlaying) => {
        return (
            <div style={{ padding: '.5em'}} className="p-g-12 p-md-3">
                <Panel header={renderNowPlayingGridHeader(nowPlaying)} style={{ textAlign: 'center' }}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrieveNowPlayingMovieId(nowPlaying)} >
                            <img src={`${IMG_URL}${nowPlaying.poster_path}`} alt={nowPlaying.original_title} className={'image-poster'}/>
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
                        {/*{nowPlaying.title} - {nowPlaying.genre_ids}*/}
                    </div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    {/*<Button icon="pi pi-search" onClick={(e) => this.setState({ selectedNowPlayingMovie: nowPlaying, isDialogVisible: true })}></Button>*/}
                </Panel>
            </div>
        );
    }

    const renderNowPlayingDialogContent = (event) => {
        if (props.selectedNowPlayingMovie) {
            return (
                <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>
                    <div className="p-col-12" style={{textAlign: 'center'}}>
                        <img src={`${IMG_URL}${props.selectedNowPlayingMovie.poster_path}`} alt={props.selectedNowPlayingMovie.brand} className={'image-poster'}/>
                    </div>
                    <div className="p-col-4">Title: </div>
                    <div className="p-col-8">{props.selectedNowPlayingMovie.title}</div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    return(
        <div className={'content-section implementation nowPlaying'}>
            <DataView value={props.nowPlaying}
                      layout={props.layout}
                      itemTemplate={itemTemplate}
                      header={props.renderNowPlayingHeader()}
            />
            <Dialog visible={props.isDialogVisible}
                    width="225px"
                    modal={true}
                    onHide={() => props.showNowPlayingDialog}>
                {renderNowPlayingDialogContent()}
            </Dialog>
        </div>
    )
}

export default NowPlayingView;