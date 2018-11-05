import React, {Component} from 'react'
import MediasComponent from "./MediasComponent";


class MediaPanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className={'movie-container'}>
                    <MediasComponent />
                </div>
            </div>
        )
    }
}
export default MediaPanel;