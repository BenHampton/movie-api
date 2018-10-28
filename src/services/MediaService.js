import axios from 'axios';
import{ API_URL,
    API_KEY,
    GET_SIMILAR_MEDIA} from '../config';


export class MediaService {

    getSimilarMedia(_this, mediaId){
        var SIMILAR_MEDIA = GET_SIMILAR_MEDIA.replace('{movie_id}', mediaId)
        axios.get(`${API_URL}${SIMILAR_MEDIA}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({similarMedia: data.results})
                return data;
            });
    }
}