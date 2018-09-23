import axios from 'axios';
import{API_URL, API_KEY} from '../config';

export class MovieService {
    getMovies(_this) {
        axios.get(`${API_URL}/movie/popular${API_KEY}`)
            .then(response => response.data.results)
            .then(data => {
                _this.setState({movie: data})
                return data;
            });
    }
}