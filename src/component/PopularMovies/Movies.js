import React ,{ Component} from 'react';
import {MovieService} from '../../services/MovieService';
import {IMG_URL} from '../Constants/constants'
import {DataView, DataViewLayoutOptions} from "primereact/components/dataview/DataView";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

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
            <div style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                <Row className={"show-grid"}>
                    <Col md={4} >
                        <div>
                            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} className={'image-poster'}/>                        </div>
                    </Col>
                    <Col md={7} className={'movie-title'}>
                        <div>
                            <div>Title: <b>{movie.title}</b></div>
                            <div>Genre: <b>{movie.genre_ids}</b></div>
                            <div>Stars: <b>{movie.vote_average}</b></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    renderHeader() {
        return (
            <div>
                <div>
                    <DataViewLayoutOptions layout={this.state.layout}
                                           onChange={(e) => this.setState({layout: e.value})}
                    />
                </div>
            </div>
        );
    }

    render(){
        const header = this.renderHeader();

        return(
            <div>
                <div>
                    <div>
                        <DataView value={this.state.popularMovies}
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