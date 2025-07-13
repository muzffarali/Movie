import React, { useState } from 'react'
import './Header.scss'
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from '../../context/context'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
const Header = () => {
    const { dispatch, query } = useGlobalContext()
    const [isToggle, setIsToggle] = useState(false)
    return (
        <>
            <header className="header">
                <nav>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="logo">
                        <h1>MyMovie</h1>
                        <p>Watch Moives online</p>
                        </div>
                    </NavLink>
                </nav>
                <div className={isToggle ? "resposive" : "null"}>
                    <div className="searchBar">
                        <input
                            type="text"
                            placeholder='Search Movie Tv Shows... '
                            onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
                            value={query} />
                        <NavLink to={`/search/${query}`} style={{ margin: '0 0 10px 12px' }}>
                            <button>
                                <CiSearch />
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="hamBurger" onClick={() => setIsToggle(!isToggle)}>
                    <FaBars />
                </div>
            </header>

        </>
    )
}
export default Header