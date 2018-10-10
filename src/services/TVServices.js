import axios from 'axios';
import{ API_URL,
    API_KEY,
    GET_TV_GENRES} from '../config';

export class MovieService {

    getTVGenres(_this) {
        axios.get(`${API_URL}${GET_TV_GENRES}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
            });

    }
}