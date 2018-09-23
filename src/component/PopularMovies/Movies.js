import React ,{ Component} from 'react';
import {MovieService} from '../../services/MovieService';
import {IMG_URL} from '../Constants/constants'
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies: [],
            layout: 'list'

        }
        this.getMovieDB = new MovieService();
        this.itemTemplate = this.itemTemplate.bind(this)
    }
    componentDidMount(){
        this.popularMovies = this.getMovieDB.getPopularMovies(this);
    }

    itemTemplate(movie, layout) {
        if (!movie) {
            return;
        }
        if (layout === 'list')
            return this.renderListItem(movie);
    }

    renderListItem(movie) {
        return (
            <div className={"p-grid"}>
                <div className={"p-col car-details"} style={{background: "blue", padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                    <div className={"p-col"}>
                        <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} style={{height: '80px', width: '80px;'}}/>
                    </div>
                    <div className={"p-col car-data"}>
                        <div>Title: <b>{movie.title}</b></div>
                        <div>Genre: <b>{movie.genre_ids}</b></div>
                        <div>Stars: <b>{movie.vote_average}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    renderHeader() {
        return (
            <div className={"p-grid"}>
                <div className={"p-col"} style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout}
                                           onChange={(e) => this.setState({layout: e.value})}
                    />
                </div>
                <div className={"p-grid"}>
                    <div className={"p-col"}>1</div>
                    <div className={"p-col"}>1</div>
                    <div className={"p-col"}>1</div>
                </div>
            </div>
        );
    }

    render(){
        const header = this.renderHeader();

        return(
            <div className={"p-grid"} style={{background: 'orange'}}>
                <div>
                    <div>
                        <h1>DataView</h1>
                    </div>
                    <div className={"p-col"}>
                        <DataView value={this.state.popularMovies}
                                  header={header}
                                  layout={this.state.layout}
                                  itemTemplate={this.itemTemplate}
                        />
                    </div>
                </div>

            </div>
        )
    }
}
export default Movies