import axios from 'axios';
import{ API_URL,
    API_KEY,
    GET_SIMILAR_MOVIE_MEDIA,
    GET_SIMILAR_TV_MEDIA}from '../config';


export class MediaService {

    getSimilarMovieMedia(_this, mediaId){
        let SIMILAR_MEDIA = GET_SIMILAR_MOVIE_MEDIA.replace('{movie_id}', mediaId);
        axios.get(`${API_URL}${SIMILAR_MEDIA}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({ similarMedia: data.results });
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    getSimilarTvMedia(_this, mediaId){
        let SIMILAR_MEDIA = GET_SIMILAR_TV_MEDIA.replace('{tv_id}', mediaId);
        axios.get(`${API_URL}${SIMILAR_MEDIA}${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                _this.setState({ similarMedia: data.results });
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    }


}