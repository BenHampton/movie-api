import axios from 'axios';
import {
    API_URL,
    API_KEY,
    GET_POPULAR_TV_SHOWS,
    GET_TV_SHOW_VIDEOS,
    GET_TV_GENRES,
    GET_TV_SHOW_REVIEWS
} from '../config';

export class TVServices {

    getPopularTvShows(_this) {
        axios.get(`${API_URL}${GET_POPULAR_TV_SHOWS}${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({popularTvShows: data})
                _this.setState({tvShowIds: data.id})
                return data;
            });
    }

    getTvShowTrailer(_this, tvShowId) {
        var TV_SHOW_VIDEOS = GET_TV_SHOW_VIDEOS.replace('{tv_id}', tvShowId)
        axios.get(`${API_URL}${TV_SHOW_VIDEOS}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({tvShowsTrailerKey: data.results[0].key})
                return data
            });
    }

    getTVShowReviews(_this, tvShowId){
        var TV_SHOW_REVIEWS = GET_TV_SHOW_REVIEWS.replace('{tv_id}', tvShowId)
        axios.get(`${API_URL}${TV_SHOW_REVIEWS}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({ tvShowReviews: data.results })
                return data;
            });
    }

    getTVGenres(_this) {
        axios.get(`${API_URL}${GET_TV_GENRES}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
            });

    }
}