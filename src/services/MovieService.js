import axios from 'axios';
import{ API_URL,
        API_KEY,
        API_POPULAR_MOVIES,
        URL_TV_GENRES,
        URL_MOVIE_GENRES,
        API_NOW_PLAYING} from '../config';

import '../component/PopularMovies/css/movie.css';

export class MovieService {
    getPopularMovies(_this) {
        axios.get(`${API_URL}${API_POPULAR_MOVIES}${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({popularMovies: data})
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

    getNowPlaying(_this){
        axios.get(`${API_URL}${API_NOW_PLAYING}${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({nowPlaying: data})
                return data;
            });

    }




    getMovieGenres(_this) {
        axios.get(`${API_URL}${URL_MOVIE_GENRES}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                var p = _this;
            });

    }

    getTVGenres(_this) {
        axios.get(`${API_URL}${URL_TV_GENRES}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                var p = _this;
            });

    }
}