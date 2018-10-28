import React from 'react'
import {IMG_URL} from "../Constants/constants";
import {Card} from "primereact/components/card/Card";
import {Fieldset} from "primereact/components/fieldset/Fieldset";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import {Lightbox} from "primereact/components/lightbox/Lightbox";
import SimilarMediaComponent from "../SimilarMedia/SimilarMediaComponent";

const TvShowView = props => {

    const renderReviewFieldSetLegend = (author) => {
        return(
            <div className={'movie-reviewLegend'}>
                {author}
            </div>
        )
    }

    const renderReviews = (event) => {
        let reviews = props.tvShowReviews;
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
                        <Fieldset legend={renderReviewFieldSetLegend(review.author)}
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

    const renderMovieOverview = () => {
        return(
            <div className="content-section implementation scrollpanel-demo">
                <Card subTitle={"Overview"}>
                    <ScrollPanel className={"movie-overview"}>
                        {props.tvShow.overview}
                    </ScrollPanel>
                </Card>
            </div>
        )
    }
    return(
        <div className={'p-grid p-nogutter p-col-12 p-align-stretch vertical-container'} style={{background: "#D3D3D3"}}>
            <div className={'p-grid p-nogutter p-col-12 '}>
                <div className={'p-col-5'}>
                    <div className={'movie-imageContainer'}>
                        <Lightbox type={'content'}>
                            <a className={'group'} >
                                <img src={`${IMG_URL}${props.tvShow.poster_path}`} alt={props.tvShow.name} className={'image-movie-poster'}/>
                            </a>
                            <div>
                                <iframe title="Video"
                                        width="560"
                                        height="315"
                                        src={"https://www.youtube.com/embed/" + props.trailer}
                                        frameBorder="0"
                                        allowFullScreen>

                                </iframe>
                            </div>
                        </Lightbox>
                        <div className={'p-col-12'}>
                            {renderMovieOverview()}
                        </div>
                    </div>
                </div>
                <div className={'p-col-7'}>
                    <div className={'movie-title'}>
                        {props.tvShow.name}
                    </div>
                    <div className={'p-grid p-nogutter p-col-12'} style={{textAlign: 'center'}}>
                        <div className={"movie-commentsAndReviews"}>
                            {props.tvShowReviews.length !== 0 ?
                                <Card subTitle="Reviews" className={'movie-reviewsHeader'}>
                                    <div className={'movie-reviewClickText'}>
                                        Click the name to show review
                                    </div>
                                </Card>
                                : ''
                            }
                            {renderReviews()}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'similar-margin-top-10'}>
                <div className={'p-grid p-col-12 p-nogutter similar-margin-bottom-5'} style={{background: '#F0FFF0'}}>
                    <div className={'p-offset-1 p-col-10'}>
                        <SimilarMediaComponent id={props.tvShow.id} title={props.tvShow.name} refreshMoviePage={props.refreshTvShowPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TvShowView;