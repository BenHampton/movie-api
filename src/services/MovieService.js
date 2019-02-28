import axios from 'axios';
import {API_URL, API_KEY} from '../config/config';
import { GET_POPULAR_MOVIES,
         GET_MOVIE_GENRES,
         GET_NOW_PLAYING,
         GET_MOVIE_VIDEOS,
         GET_MOVIE_REVIEWS,
         GET_RELEASE_DATE } from '../config/urls';

const mediaAndRatings = [];

export class MovieService {
    getMoviesData(_this) {
        axios.get(`${API_URL}${GET_POPULAR_MOVIES}${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({ movies: data} );
                return data;
            });
    };

    getNowPlaying(_this){
        axios.get(`${API_URL}${GET_NOW_PLAYING}${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({ movies: data } );
                return data;
            });
    };

    getMovieRating(_this, data){
        let id = data.id
        let RELEASE_DATE = GET_RELEASE_DATE.replace('{movie_id}', id);
        axios.get(`${API_URL}${RELEASE_DATE}${API_KEY}`)
            .then(response => response.data)
            .then(newData => {
                let allResults = newData.results;
                for (let i=0; i < allResults.length; i++) {

                    let objectToPush = [];
                    if (allResults[i].iso_3166_1 === "US") {

                        let releaseDates = allResults[i].release_dates;
                        for (let j = 0; j < releaseDates.length; j++) {

                            if (releaseDates[j].certification !== '') {

                                objectToPush = Object.assign( {}, data, {rating: releaseDates[j].certification} );
                                mediaAndRatings.push(objectToPush);
                                break;
                            }else if (j === releaseDates.length-1){

                                objectToPush = Object.assign( {}, data, {rating: ''} );
                                mediaAndRatings.push(objectToPush);
                            }
                        }
                        _this.setState({ nowPlaying: mediaAndRatings });
                        _this.setState({ popularMovies: mediaAndRatings });
                        break;
                    } else if (allResults[i].iso_3166_1 !== 'US' && i == allResults.length-1){
                        objectToPush = Object.assign( {}, data, {rating: ''} );
                        mediaAndRatings.push(objectToPush);
                        _this.setState({ popularMovies: mediaAndRatings });
                    }
                }

                return data;
            });
    };

    getMovieTrailer(_this, movieId) {
        let MOVIE_VIDEOS = GET_MOVIE_VIDEOS.replace('{movie_id}', movieId);
        axios.get(`${API_URL}${MOVIE_VIDEOS}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({movieTrailerKey: data.results[0].key})
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({hasMovieTrailer: false})
            });
    };


    getMovieReviews(_this, movieId){
        let MOVIE_REVIEWS = GET_MOVIE_REVIEWS.replace('{movie_id}', movieId);
        axios.get(`${API_URL}${MOVIE_REVIEWS}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({movieReviews: data.results});
                return data;
            });
    }

    getMovieGenres(_this) {
        axios.get(`${API_URL}${GET_MOVIE_GENRES}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                let p = _this;
            });

    }
}