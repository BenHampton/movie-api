import axios from 'axios';
import{ API_URL,
        API_KEY,
        GET_POPULAR_MOVIES,
        GET_MOVIE_GENRES,
        GET_NOW_PLAYING,
        GET_DETAILS,
        GET_MOVIE_REVIEWS,
        APPEND_TO_RESPONSE} from '../config';


export class MovieService {
    getPopularMovies(_this) {
        axios.get(`${API_URL}${GET_POPULAR_MOVIES}${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({popularMovies: data})
                _this.setState({movieIds: data.id})
                return data;
            });
    }

    getMovieTrailer(_this, movieId) {
        axios.get(`${API_URL}` + '/movie/' + movieId + '/videos' + `${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({movieTrailerKey: data.results[0].key})
            })
            .catch(function (error) {
                console.log(error)
                _this.setState({hasMovieTrailer: false})
            });
    }

    getNowPlaying(_this, callback){
        axios.get(`${API_URL}${GET_NOW_PLAYING}${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({nowPlaying: data}, () => {
                    callback(data);
                })
                return data;
            });

    }

    getDetailsAppendingRelease(_this, movies){
        for(var i = 0; i <= movies.length-1; i++) {
            var id = movies[i].id
            axios.get(`${API_URL}` + '/movie/' + id + '/release_dates' + `${API_KEY}${APPEND_TO_RESPONSE}` + 'releases')
                .then(response => response.data)
                .then(data => {
                    _this.setState({showReleaseDates: data})
                    return data;
                })
        }
        return
    }

    getMovieReviews(_this, movieId){
        var MOVIE_REVIEWS = GET_MOVIE_REVIEWS.replace('MovieId', movieId)
        axios.get(`${API_URL}${MOVIE_REVIEWS}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({movieReviews: data.results})
                return data;
            });
    }

    getMovieGenres(_this) {
        axios.get(`${API_URL}${GET_MOVIE_GENRES}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                var p = _this;
            });

    }
}