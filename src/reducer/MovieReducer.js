
const MovieReducer = (state, action) => {
    switch (action.type) {
        case "SET_POPULAR_MOVIE":
            return {
                ...state,
                popularMovie: action.payload,
            }
        case "SET_TOP_RATED_MOVIE":
            return {
                ...state,
                topRatedMovie: action.payload,
            }
        case "SINGLE_MOVIE":
            return {
                ...state,
                singleMovie: action.payload,
            }
        case "SET_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case "MY_SEARCH_MOVIE":
            return {
                ...state,
                searchMovie: action.payload
            }
        default:
            return state



    }



}

export default MovieReducer
