import axios from 'axios';
import{API_URL, API_KEY, API_POPULAR_MOVIES} from '../config';

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
}