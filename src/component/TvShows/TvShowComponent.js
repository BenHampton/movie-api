import React, {Component} from 'react'
import '../../../node_modules/primereact/components/fieldset/Fieldset.css'
import {TVServices} from "../../services/TVServices";
import TvShowView from "./TvShowView";

class TvShowComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            tvShow: this.props.location.state.tvShow,
            trailer: this.props.location.state.tvShowsTrailerKey,
            tvShowReviews: [],
            hasReviews: true
        }
        this.getMovieDB = new TVServices();
        this.refreshTvShowPage = this.refreshTvShowPage.bind(this);
    }

    componentDidUpdate(){
        window.scrollTo(0,0);
    }

    componentDidMount(){
        this.tvShowReviews = this.getMovieDB.getTVShowReviews(this, this.state.tvShow.id);
    }

    refreshTvShowPage(similarMedia){
        this.setState({tvShow: similarMedia}, () => {
            this.tvShowReviews = this.getMovieDB.getTVShowReviews(this, this.state.tvShow.id);
        });
    }

    render(){
        return(
            <TvShowView tvShow={this.state.tvShow}
                         trailer={this.state.trailer}
                         tvShowReviews={this.state.tvShowReviews}
                         hasReviews={this.state.hasReviews}
                         refreshTvShowPage={this.refreshTvShowPage}
            />
        )
    }
}
export default TvShowComponent;
