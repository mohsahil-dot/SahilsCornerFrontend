import React, { useState } from 'react'
import "./Nav.css";
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {BiUser} from "react-icons/bi";
import {CiLogin, CiLogout} from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({searchBtn}) => {
    const [search, setSearch] = useState();
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
        <div className='main-header'>
            <div className='container'>
                <div className='logo'>
                        <h2>Sahil'sCorner</h2>
                </div>
                <div className='search-box'>
                        <input type='text' value={search} placeholder='search' autoComplete="off" onChange={(event) => setSearch(event.target.value)}></input>
                        <button onClick={() => searchBtn(search)}>Search</button>
                </div>
                <div className='icon'>
                    <div className='account'>
                        {isAuthenticated ? (
                            <>
                                <div className='user-icon'>
                                    <BiUser  size={24} color='#000' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} />
                                </div>
                                <p><b>Hello, {user.name}</b></p>
                            </>
                        ) : (
                            <>
                                <div className='user-icon'>
                                    <BiUser size={24} color='#000' onClick={() => loginWithRedirect()} />
                                </div>
                                <p><b>Hello, User</b></p>
                            </>
                        )}
                    </div>
                    <div className='second-icon'>
                        <Link to="/wishlist" className='heartlink'><AiOutlineHeart color='#000' size={24}/></Link>
                        <Link to="/cart" className='link'><AiOutlineShoppingCart color='#000' size={24}/></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product'className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about'className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact'className='link'>Contact</Link>
                </li>
            </ul>
            </div>
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: `https://sahilscorner.netlify.app` } })}><CiLogout className='logButton'/></button>
                    :
                    <button onClick={() => loginWithRedirect()}><CiLogin className='logButton' /></button>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav;