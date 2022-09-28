const API_KEY = process.env.API_KEY;

export default {
    fetchTrendings : {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated : {
        title : 'Top Rated',
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies : {
        title : 'Action Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchRomanceMovies : {
        title : 'Romance Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery : {
        title : 'Mystery',
        url :`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi : {
        title : 'SciFi',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern : {
        title : 'Western',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation : {
        title : 'Animation',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV : {
        title : 'TV Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    fetchHorrorMovies : {
        title : 'Horror Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchComedyMovies : {
        title : 'Comedy Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
}