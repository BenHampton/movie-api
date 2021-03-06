import React from 'react';
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import {Card} from "primereact/components/card/Card";
import {Fieldset} from "primereact/components/fieldset/Fieldset";
import SimilarMediaComponent from "../SimilarMedia/SimilarMediaComponent";
import {IMG_URL} from "../Constants/constants";

const MovieView = props => {

    const renderMovieReviews = () => {
        let reviews = props.movieReviews;
        if(reviews.length === 0){
            return(
                <div className={'p-grid movie-noReviews movie-text'}>
                    <Card subTitle={"Reviews"} className={'movie-reviewsHeader movie-reviewText p-col-12'}>
                        There are no reviews at this time
                    </Card>
                </div>
            )
        }
        let allReviews = reviews.map((review, key) => {
            return(
                <div key={key} className="content-section introduction">
                    <div className="feature-intro">
                        <Fieldset legend={renderReviewFieldSetLegend(review.author)}
                                  className={'p-fieldset-content movie-review'}
                                  toggleable={true}
                                  collapsed={true}>
                            <ScrollPanel className={"movie-reviewScrollPanel"}>
                                <div className={'movie-reviewContent movie-text'}>
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

    const renderReviewFieldSetLegend = (author) => {
        return(
            <div className={'movie-reviewLegend'}>
                {author}
            </div>
        )
    };

    const renderMovieOverview = (event) => {
        return(
            <div className="content-section implementation scrollpanel-demo movie-overview-container">
                <Card subTitle={"Overview"} className={'movie-overview-title'}>
                    <ScrollPanel className={"movie-overview movie-text"}>
                        {props.movie.overview}
                    </ScrollPanel>
                </Card>
            </div>
        )
    };

    return(
        <div className={'p-grid p-nogutter p-col-12 p-align-stretch vertical-container movie'}>
            <div className={'p-grid p-nogutter p-col-12 '}>
                <div className={'p-col-5'}>
                    <div className={'movie-imageContainer'}>
                        {/*<Lightbox type={'content'}>*/}
                            <a className={'group'} >
                                <img src={`${IMG_URL}${props.movie.poster_path}`} alt={props.movie.original_title} className={'image-movie-poster'}/>
                            </a>
                            {/*<div>*/}
                                {/*<iframe title="Video"*/}
                                        {/*width="560"*/}
                                        {/*height="315"*/}
                                        {/*src={"https://www.youtube.com/embed/" + props.trailer}*/}
                                        {/*frameBorder="0"*/}
                                        {/*allowFullScreen>*/}

                                {/*</iframe>*/}
                            {/*</div>*/}
                        {/*</Lightbox>*/}
                        <div className={'p-col-12'}>
                            {renderMovieOverview()}
                        </div>
                    </div>
                </div>
                <div className={'p-col-7'}>
                    <div className={'movie-title movie-text'}>
                        {props.movie.title}
                    </div>
                    <div className={'p-grid p-nogutter p-col-12'} style={{textAlign: 'center'}}>
                        <div className={"movie-commentsAndReviews"}>
                            {props.movieReviews.length !== 0 ?
                                <Card subTitle="Reviews" className={'movie-reviewsHeader movie-text'}>
                                    <div className={'movie-reviewClickText'}>
                                        Click the name to show review
                                    </div>
                                </Card>
                                : ''
                            }
                            {renderMovieReviews()}
                        </div>
                    </div>
                </div>
            </div>
            { props.similarMedia.length !== 0 ?
                <div className={'similar-margin-top-10'}>
                    <div className={'p-grid p-col-12 p-nogutter similar-margin-bottom-5'}>
                        <div className={'p-offset-1 p-col-10'}>
                            <SimilarMediaComponent id={props.movie.id}
                                                   title={props.movie.title}
                                                   refreshMoviePage={props.refreshMoviePage}
                                                   similarMedia={props.similarMedia}
                                                   location={window.location.pathname}
                            />
                        </div>
                    </div>
                </div>
                : ''
            }
        </div>
    )

}
export default MovieView;