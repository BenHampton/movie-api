import React ,{ Component} from 'react';
import {MovieService} from '../services/MovieService';

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            movie: [],

        }
        this.getMovieDB = new MovieService();
    }
    componentDidMount(){
        this.movie = this.getMovieDB.getMovies(this);
    }
    render(){
        var movie = this.state.movie.map((movie, key) => {
            return (
                <div key={key}>
                    {key +1}: {movie.title}
                </div>
            )

        })
        console.log(this.state.movie)
        return(
            <div>
                TEST
                {movie}
            </div>
        )
    }
}
export default Movies