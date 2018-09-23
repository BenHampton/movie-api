import React, { Component } from 'react'
import Genres from "./Genres";

class GenresPanel extends Component{
    render(){
        return(
            <div className={"movieContainer"}>
                <div className={"movieBox"}>
                    <div >
                        <Genres />
                    </div>
                </div>
            </div>
        )
    }
}
export default GenresPanel;