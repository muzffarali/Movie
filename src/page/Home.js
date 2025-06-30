import React from 'react'
import PopularMovie from "../component/Movie/MovieList"
import Header from "../component/Header/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useGlobalContext } from '../context/context';
import { NavLink } from 'react-router-dom';
import '../component/Movie/MovieList.scss'
const Home = () => {
    const { popularMovie } = useGlobalContext()
    const newCarosuelMovie = popularMovie.slice(0, 6)
    return (
        <>
            <section className="Poster">
                <Carousel className='slider'
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        newCarosuelMovie.map((curElem) => {
                            const { poster_path, title, id, } = curElem
                            return (
                                <>
                                    <NavLink to={`movie/${id}`} style={{ textDecoration: "none", color: "black " }}>
                                        <div className="posterImage">
                                            <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                                width={1200}
                                                height={400}
                                                alt={title} />
                                            <p>{title} </p>
                                        </div>
                                    </NavLink>
                                </>
                            )
                        })
                    }
                </Carousel>
            </section>
            <Header />
            <PopularMovie />
        </>
    )
}

export default Home
