import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import { useParams } from 'react-router-dom'
import Header from "../component/Header/Header"
import './singleMovie.scss'
const SingleMovie = () => {
    const { getSingleMovie, singleMovie } = useGlobalContext()
    const { id } = useParams()
    const {
        backdrop_path,
        genres,
        poster_path,
        original_title,
        overview,
    } = singleMovie
    console.log(singleMovie)
    useEffect(() => {
        getSingleMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
    }, [])
    return (
        <>
            <Header />
            <section className='singleMovie'>
                <div className="poster">
                    <img
                        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                        alt={original_title}
                        height={500}
                        width={500} />
                    <div className="details">
                        <img
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                            alt={original_title}
                            height={300}
                            width={500} />
                        <div className="description">
                            <h2>{original_title} </h2>
                            <i><p>{overview} </p></i>
                            <p>Genres:</p>
                            {genres?.map((genre) => {
                                return (
                                    <>
                                        <span>{genre.name}, </span>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SingleMovie
