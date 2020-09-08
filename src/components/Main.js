import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css'
import { Redirect } from 'react-router-dom';
const Main = () => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
        const queryParam = {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
        }
        axios.post("https://cors-anywhere.herokuapp.com/https://hoblist.com/movieList", queryParam)
            .then(res => {
                setLoad(false)
                setData(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    const logout = (e) => {
        localStorage.removeItem('auth')
        window.location.reload();
    }
    if (localStorage.getItem('auth') === 'authenticated') {
        if (load) {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1>Please wait, fetching the data ......</h1>
                </div>

            )
        }
        else {
            return (
                <div className="container">
                    <button className="btn btn-danger logout-btn" onClick={logout} >Logout</button>
                    <h2 style={{ textAlign: "center" }}>Kannada Movies List</h2>
                    <hr />
                    {data.map(movie => {
                        return (
                            <React.Fragment key={movie._id}>
                                <div className="fetched-data">
                                    <div className=" votes">
                                        <img src="https://image.flaticon.com/icons/svg/25/25330.svg" height="50px" width="50px" alt="icon" />
                                        <p style={{ textAlign: "center" }}>{movie.voting}</p>
                                        <img src="https://image.flaticon.com/icons/svg/25/25224.svg" height="50px" width="50px" alt="icon" />
                                        <p>Votes</p>
                                    </div>
                                    <div className="poster">
                                        <img src={movie.poster} className="poster-img" style={{ borderRadius: 10 }} alt="poster" />
                                    </div>
                                    <div className="poster-details">
                                        <h3>{movie.title}</h3>
                                        <p>Genre: <b>{movie.genre}</b></p>
                                        <p>Director: <b>{movie.director}</b></p>
                                        <p className="stars">Starring: <b>{movie.stars}</b></p>
                                        <p>Language: <b>{movie.language}</b></p>
                                        <p>Released Date: <b>{(new Date(movie.releasedDate * 1000).getDate())}-{(new Date(movie.releasedDate * 1000).getMonth())}-{(new Date(movie.releasedDate * 1000).getFullYear())}</b></p>
                                        <p>{movie.pageViews} views | voted by: <b>{movie.totalVoted}</b></p>

                                    </div>

                                </div>
                                <hr />
                            </React.Fragment>
                        )
                    })}

                </div>
            );
        }

    }
    else {
        return (
            <Redirect to="/login" />
        )
    }

}

export default Main;
