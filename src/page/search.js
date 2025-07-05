import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import './Search.scss'
import Header from "../component/Header/Header"

const Search = () => {
    const { getSearchMovie, searchMovie } = useGlobalContext()
    const { query } = useParams()
    useEffect(() => {
        getSearchMovie(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=4e44d9029b1270a757cddc766a1bcb63`)

    }, [query])
    console.log(searchMovie)
    return (
        <>
            <Header />
            <div className="serach-container">
                {searchMovie.map((curElm) => {
                    const { poster_path, title, id } = curElm
                    return (
                        <>
                            <NavLink to={`/movie/${id}`} style={{ margin: '0 0 10px 12px' }}>
                                <div className="thumbnail" >
                                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={id} />
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

export default Search
