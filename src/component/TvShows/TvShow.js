import React, { Component } from 'react'
import {IMG_URL} from "../Constants/constants";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import {Card} from "primereact/components/card/Card";
import {MovieService} from "../../services/MovieService";
import {Fieldset} from "primereact/components/fieldset/Fieldset";
import '../../../node_modules/primereact/components/fieldset/Fieldset.css'
import {TVServices} from "../../services/TVServices";

class TvShow extends Component{
    constructor(props){
        super(props)
        this.state = {
            tvShow: this.props.location.state.tvShow,
            trailer: this.props.location.state.tvShowsTrailerKey,
            tvShowReviews: [],
            hasReviews: true
        }
        this.getMovieDB = new TVServices();
        this.renderReviews = this.renderReviews.bind(this);

    }

    componentDidMount(){
        this.tvShowReviews = this.getMovieDB.getTVShowReviews(this, this.state.tvShow.id);
    }

    isEmpty(item){
        return item === null || item === undefined || item === '';
    }

    renderReviewFieldSetLegend(author){
        return(
            <div className={'movie-reviewLegend'}>
                {author}
            </div>
        )
    }

    renderReviews(){
        let reviews = this.state.tvShowReviews;
        if(reviews.length === 0){
            return(
                <div className={'p-grid movie-noReviews'}>
                    <Card subTitle={"Reviews"} className={'movie-reviewsHeader movie-reviewText p-col-12'}>
                        There are no reviews at this time
                    </Card>
                </div>
            )
        }
        var allReviews = reviews.map((review, key) => {
            return(
                <div key={key} className="content-section introduction">
                    <div className="feature-intro">
                        <Fieldset legend={this.renderReviewFieldSetLegend(review.author)}
                                  className={'p-fieldset-content movie-review'}
                                  toggleable={true}
                                  collapsed={true}>
                            <ScrollPanel className={"movie-reviewScrollPanel"}>
                                <div className={'movie-reviewContent'}>
                                    {review.content}
                                </div>
                            </ScrollPanel>
                        </Fieldset>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {allReviews}
            </div>
        )

    }

    renderMovieOverview(){
        return(
            <div className="content-section implementation scrollpanel-demo">
                <Card subTitle={"Overview"}>
                    <ScrollPanel className={"movie-overview"}>
                        {this.state.tvShow.overview}
                    </ScrollPanel>
                </Card>
            </div>
        )
    }

    render(){
        console.log(this.props.location.state.tvShow)
        return(
            <div className={'p-grid p-nogutter p-col-12 p-align-stretch vertical-container'} style={{background: "#D3D3D3"}}>
                <div className={'p-grid p-nogutter p-col-12 '}>
                    <div className={'p-col-5'}>
                        <div className={'movie-imageContainer'}>
                            <Lightbox type={'content'}>
                                <a className={'group'} >
                                    <img src={`${IMG_URL}${this.state.tvShow.poster_path}`} alt={this.state.tvShow.name} className={'image-movie-poster'}/>
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
                            <div className={'p-col-12'}>
                                {this.renderMovieOverview()}
                            </div>
                        </div>
                    </div>
                    <div className={'p-col-7'}>
                        <div className={'movie-title'}>
                            {this.state.tvShow.name}
                        </div>
                        <div className={'p-grid p-nogutter p-col-12'} style={{textAlign: 'center'}}>
                            <div className={"movie-commentsAndReviews"}>
                                {this.state.tvShowReviews.length !== 0 ?
                                    <Card subTitle="Reviews" className={'movie-reviewsHeader'}>
                                        <div className={'movie-reviewClickText'}>
                                            Click the name to show review
                                        </div>
                                    </Card>
                                    : ''
                                }
                                {this.renderReviews()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TvShow;
