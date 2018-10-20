import React, {Component} from 'react';
import {IMG_URL} from '../Constants/constants'
import {Panel} from '../../../node_modules/primereact/panel'
import {Dialog} from "primereact/components/dialog/Dialog";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import {Link} from "react-router-dom";
import {MediaService} from "../../services/MediaService";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";

class SimilarMedia extends Component{
    constructor(props){
        super(props);
        this.state = {
            similarMedia: [],
            layout: 'grid',
            movieTrailerKey: null,
            selectedMovie: null,
            movieIds: null,
            isDialogVisible: false

        }
        this.getMovieDB = new MediaService();
        this.itemTemplate = this.itemTemplate.bind(this)
        this.retrieveMovieId = this.retrieveMovieId.bind(this);
    }
    componentDidMount(){
        this.similarMedia = this.getMovieDB.getSimilarMedia(this, this.props.id);
    }

    itemTemplate(movie, layout) {
        if (!movie) {
            return;
        }
        if (layout === 'grid'){
            return this.renderImageGrid(movie)
        }
    }

    retrieveMovieId(movie){
        this.getMovieDB.getMovieTrailer(this, movie.id);
        return(
            <div>
                coming soon
            </div>
        )
    }
    //
    // renderSimilarMedia(similarMedia){
    //     return(
    //         <div>
    //             <Link
    //                 to={{
    //                     pathname: "/movie",
    //                     state: { movie: similarMedia }
    //                 }} >
    //             </Link>
    //         </div>
    //     )
    // }

    renderImageGrid(similarMedia){
        return (
            <div style={{ padding: '.5em' }} className="p-g-12 p-md-3 similar-margin-top-5">
                <Panel style={{ textAlign: 'center'}}>
                    <a onClick={(e) => this.props.refreshPage(similarMedia)} >
                        <img src={`${IMG_URL}${similarMedia.poster_path}`} alt={similarMedia.original_title} className={'similar-image-poster'}/>
                    </a>
                </Panel>
            </div>
        );
    }

    renderHeader() {
        return (
            <h4 className={'similar-header'}>
               Similar movies related to {this.props.title}
            </h4>
        );
    }

    render(){
        const header = this.renderHeader();
        return(
            <div  className={'content-section implementation'}>
                <div className={'content-section implementation '}>
                    <ScrollPanel className={'similar-scrollPanel'}>
                        <DataView value={this.state.similarMedia}
                                  layout={this.state.layout}
                                  itemTemplate={this.itemTemplate}
                                  header={header}
                                  className={'p-nogutter'}
                        />
                    </ScrollPanel>
                </div>
            </div>
        )
    }
}
export default SimilarMedia