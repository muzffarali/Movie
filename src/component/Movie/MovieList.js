import React from 'react'
import { NavLink } from "react-router-dom"
import { useGlobalContext } from '../../context/context'
import './MovieList.scss'
const PopularMovie = () => {
    const { popularMovie, topRatedMovie } = useGlobalContext()
    const newPopularMovie = popularMovie.slice(0, 16)
    const newTopRatedMovie = topRatedMovie.slice(0, 16)
    return (
        <>
            <p className="popularTitle">Popular</p>
            <div className="popular-container">
                {newPopularMovie.map((curElm) => {
                    const { poster_path, title, id, } = curElm
                    return (
                        <>
                            <NavLink to={`movie/${id}`} style={{ margin: '0 0 10px 12px' }} >
                                <div className="thumbnail" >
                                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={id} />
                                    <p>{title}</p>
                                </div>
                            </NavLink>
                        </>
                    )
                })}
            </div>
            <p className="topRatedTitle">Top Rated</p>
            <div className="topRatedContainer">
                {newTopRatedMovie.map((curElm) => {
                    const { poster_path, title, id } = curElm
                    return (
                        <>
                            <NavLink to={`movie/${id}`} style={{ margin: '0 0 10px 12px' }} >
                                <div className="thumbnail">
                                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                                    <p>{title}</p>
                                </div>
                            </NavLink>
                        </>
                    )
                })}
            </div>
        </>

    )

}

export default PopularMovie
