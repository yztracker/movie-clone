import React, { useState ,useEffect} from 'react'
import axios from './axios';
import requests from './request';
import './banner.css'

const url="https://image.tmdb.org/t/p/original";


function Banner() {

    const [movie,setMovie]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchTopRate);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
            );
            console.log(request)
            return request;
        }
        fetchData();
    },[]);

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(${url}${movie.backdrop_path})`,
                backgroundPosition:"center"
            }}
        >
            <div className="banner_contents">
            {/*功能描述，每次刷新都會有不同的電影當封面 */}

            {/*title */}
                <h1 className="banner_title">{movie.title}</h1>
            {/*2button */}
                <div className="banner_btns">
                    <button className="banner_btn">Play</button>
                    <button className="banner_btn">List</button>

                </div>
            {/*描述 */}
            <div className="banner_description">{movie.overview}</div>
            </div>
        </header>
    )
}

export default Banner
