import React, { Component } from 'react'

import NowPlaying from "./NowPlaying";

class NowPlayingPanel extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div>
                    <NowPlaying />
                </div>
            </div>
        )
    }
}
export default NowPlayingPanel;