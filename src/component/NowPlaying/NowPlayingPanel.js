import React, {Component} from 'react'
import NowPlayingComponent from "./NowPlayingComponent";

class NowPlayingPanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                {/*<NowPlaying />*/}
                <NowPlayingComponent />
            </div>
        )
    }
}
export default NowPlayingPanel;