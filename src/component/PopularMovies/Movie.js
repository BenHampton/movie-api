import React, { Component } from 'react'
import {IMG_URL} from "../Constants/constants";
import {Lightbox} from "primereact/components/lightbox/Lightbox";

class Movie extends Component{
    constructor(props){
        super(props)
        this.state = {
            movie: this.props.location.state.movie,
            trailer: this.props.location.state.movieTrailerKey
        }

    }

    render(){
        console.log(this.state.trailer)
        return(
            <div className={'p-grid p-nogutter p-col-12 p-align-stretch vertical-container'} style={{background: 'red'}}>
                <div className={'p-grid p-nogutter p-col-12 '} style={{background: 'blue'}}>
                    <div className={'p-col-5'} style={{background: 'green'}}>
                        <Lightbox type={'content'}>
                            <a className={'group'} >
                                <img src={`${IMG_URL}${this.state.movie.poster_path}`} alt={this.state.movie.original_title} className={'image-poster'}/>
                            </a>
                            <div>
                                <iframe title="Video"
                                        width="560"
                                        height="315"
                                        src={"https://www.youtube.com/embed/" + this.state.trailer}
                                        frameBorder="0"
                                        allowFullScreen>

                                </iframe>
                            </div>
                        </Lightbox>
                        <div className={'p-col-12'} style={{background: 'pink'}}>
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                            OVERVIEW this is a place holer for overview
                        </div>
                    </div>
                    <div className={'p-col-7'} style={{background: 'purple'}}>
                        {this.state.movie.title}
                        <div className={'p-grid p-nogutter p-col-12'} style={{background: 'grey'}}>
                            COMMENTS / REVIEWS
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;

