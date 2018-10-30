import React from 'react'
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import {DataView} from "primereact/components/dataview/DataView";
import {IMG_URL} from "../Constants/constants";
import {Panel} from "primereact/components/panel/Panel";

const SimilarMediaView = props => {

    const itemTemplate = (movie, layout) => {
        if (!movie) {
            return;
        }
        if (layout === 'grid'){
            return renderImageGrid(movie)
        }
    }

    const renderImageGrid = (similarMedia) => {
        return (
            <div style={{ padding: '.5em' }} className="p-g-12 p-md-3 similar-margin-top-5">
                <Panel style={{ textAlign: 'center'}}>
                    <a onClick={(e) => props.refreshSimPage(similarMedia)} >
                        <img src={`${IMG_URL}${similarMedia.poster_path}`} alt={similarMedia.original_title} className={'similar-image-poster'}/>
                    </a>
                </Panel>
            </div>
        );
    }

    return(
        <div  className={'content-section implementation'}>
            <div className={'content-section implementation '}>
                <ScrollPanel className={'similar-scrollPanel'}>
                    <DataView value={props.similarMedia}
                              layout={props.layout}
                              itemTemplate={itemTemplate}
                              header={props.renderSimilarMediaHeader}
                              className={'p-nogutter'}
                    />
                </ScrollPanel>
            </div>
        </div>
    )
}

export default SimilarMediaView