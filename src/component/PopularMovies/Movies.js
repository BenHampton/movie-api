import React ,{ Component} from 'react';
import {MovieService} from '../../services/MovieService';
import {IMG_URL} from '../Constants/constants'

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies: [],

        }
        this.getMovieDB = new MovieService();
    }
    componentDidMount(){
        this.popularMovies = this.getMovieDB.getPopularMovies(this);
    }
    render(){
        var movie = this.state.popularMovies.map((movie, key) => {
            return (
                <div key={key}>
                    <label className={"movie-title"}>{movie.title}</label>
                    <img src={`${IMG_URL}${movie.poster_path}`} className={"movieBox-poster"}></img>
                </div>
            )

        })
        return(
            <div className={'movieImageContainer'}>
                {movie}
            </div>
        )
    }
}
export default Movies