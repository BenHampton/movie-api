import React from 'react'
import {DataView} from "primereact/components/dataview/DataView";
import {Dialog} from "primereact/components/dialog/Dialog";
import {IMG_URL} from "../Constants/constants";
import {Link} from "react-router-dom";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {Panel} from "primereact/components/panel/Panel";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";

const TvShowsView = props => {

    const itemTemplate = (tvShow, layout) => {
        if (!tvShow) {
            return;
        }
        if (layout === 'list') {
            return renderListItem(tvShow);
        } else if (layout === 'grid'){
            return renderImageGrid(tvShow)
        }
    }

    const renderImageHeader = (tvShow) => {
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

    const renderListItem = (tvShow) => {
        return (
            <div className={'p-grid dataview-listItem'} style={{marginLeft: '10px'}}>
                <div className={'p-col-3'}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrieveTvShowId(tvShow)} >
                            <img src={`${IMG_URL}${tvShow.poster_path}`} alt={tvShow.original_name} className={'image-poster'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + props.tvShowsTrailerKey}
                                    frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </Lightbox>
                </div>
                <div className={'p-col-9'}>
                    <div className={'list-text-container'}>
                        <div className={'list-text'}>Title: <b>{tvShow.name}</b></div>
                        <div className={'list-text'}>Genre: <b>{tvShow.genre_ids}</b></div>
                        <div className={'list-text'}>Stars: <b>{tvShow.vote_average}</b></div>
                        <div>
                            <div className={'list-text'}>
                                Overview:
                            </div>
                            <div className={"overview-container"}>
                                <ScrollPanel className={"list-overview-scrollPane"}>
                                    <div className={'list-text-overview'}>
                                        <b>{tvShow.overview}</b>
                                    </div>
                                </ScrollPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const renderImageGrid = (tvShow) => {
        return (
            <div style={{ padding: '.5em' }} className="p-g-12 p-md-3">
                <Panel header={renderImageHeader(tvShow)} style={{ textAlign: 'center'}}>
                    <Lightbox type={'content'}>
                        <a className={'group'} onClick={(e) => props.retrieveTvShowId(tvShow)}>
                            <img src={`${IMG_URL}${tvShow.poster_path}`} alt={tvShow.original_name} className={'image-poster-grid'}/>
                        </a>
                        <div>
                            <iframe title="Video"
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + props.tvShowsTrailerKey}
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

    const renderTvShowsDialogContent = (event) => {
        if (props.selectedTvShow) {
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
    return(
        <div  className={'content-section implementation'} >
            <div className={'content-section implementation'}>
                <DataView value={props.popularTvShows}
                          layout={props.layout}
                          itemTemplate={itemTemplate}
                          header={props.renderTvShowHeader()}
                          className={'p-nogutter'}
                />
                <Dialog header="Tv Show Details"
                        visible={props.isDialogVisible}
                        width="225px"
                        modal={true}
                        onHide={() => props.showTvShowDialog}>
                    <div>
                        {renderTvShowsDialogContent()}
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default TvShowsView;