import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import MovieReducer from '../reducer/MovieReducer'
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63`
const TOP_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63`
const AppCotext = React.createContext()

const initialState = {
    popularMovie: [],
    topRatedMovie: [],
    singleMovie: {},
    searchMovie: [],
    query: ''
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, initialState)
    const getPopularMovie = async (url) => {
        const res = await axios.get(url)
        const popularMovie = await res.data.results;
        dispatch({ type: "SET_POPULAR_MOVIE", payload: popularMovie })
    }
    const getTopRatedMovie = async (url) => {
        const res = await axios.get(url)
        const topRatedMovie = await res.data.results;
        dispatch({ type: "SET_TOP_RATED_MOVIE", payload: topRatedMovie })
    }
    const getSingleMovie = async (url) => {
        const res = await axios.get(url)
        const SingleMovie = await res.data;
        dispatch({ type: "SINGLE_MOVIE", payload: SingleMovie })
    }
    const getSearchMovie = async (url) => {
        const res = await axios.get(url)
        const SearchMovie = await res.data.results;
        dispatch({ type: "MY_SEARCH_MOVIE", payload: SearchMovie })

    }

    useEffect(() => {
        getTopRatedMovie(TOP_URL)
        getPopularMovie(API_URL)
    }, [])



    return <AppCotext.Provider value={{ ...state, getPopularMovie, getTopRatedMovie, getSingleMovie, getSearchMovie, dispatch }}>
        {children}
    </AppCotext.Provider>

}
const useGlobalContext = () => {
    return useContext(AppCotext)
}

export { AppCotext, AppProvider, useGlobalContext }