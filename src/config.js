module.exports = {
    API_URL: 'https://api.themoviedb.org/3',
    API_KEY: '?api_key=48cbf131a5d26607e9dfff2c7d974513',
    GET_POPULAR_MOVIES: '/movie/popular',
    GET_NOW_PLAYING: '/movie/now_playing',
    GET_MOVIE_GENRES: '/genre/movie/list',
    GET_TV_GENRES: '/genre/tv/list',
    GET_DETAILS: '/movie/', // -> /movie/{movie_id}
    APPEND_TO_RESPONSE: '&append_to_response=', //  ->  https://api.themoviedb.org/3/movie/{movieId}?api_key={api_key}&append_to_response={appendedItem}
    GET_MOVIE_REVIEWS: `/movie/{movie_id}/reviews`, // -> /movie/{movie_id}/reviews
    GET_MOVIE_VIDEOS: '/movie/{movie_id}/videos',
    GET_TV_SHOW_VIDEOS: '/tv/{tv_id}/videos',
    GET_TV_SHOW_REVIEWS: '/tv/{tv_id}/reviews',
    GET_POPULAR_TV_SHOWS: '/tv/popular'
}