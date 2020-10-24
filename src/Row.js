import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
const movieTrailer = require( 'movie-trailer' )

const url="https://image.tmdb.org/t/p/w500";

function Row({title,fetchUrl,isLarge}) {

    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    //取得由tmdb來的電影資料

    useEffect(() => {
        //[]表示，當row load時，只跑一次
        //如果變成[movie]的話，表示每次movie改變時，都會重跑一遍。
        async function fetchData(){
            const request =await axios.get(fetchUrl );
            //這會得到 --> https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    
    const opts={
        height:"400",
        width:"100%",
        playerVars:{
            autoPlay:1,
        }
    }

//*https://pjchender.blogspot.com/2018/08/js-javascript-url-parameters.html 網址解析教學 */
    const handleClick=(movie) =>{

        
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{

            movieTrailer(movie?.name || "" || movie?.title)
            .then(url=>{
                //https://www.youtube.com/watch?v=kJQP7kiw5Fk&ab_channel=LuisFonsiVEVO
                const urlParams =new URLSearchParams(new URL(url).search);
                // urlParams.get('v');
                // 得到 kJQP7kiw5Fk
                setTrailerUrl(urlParams.get('v'))
            }).catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
        {/*title*/}
                <h2>{title}</h2>

        {/*imgae*/}
        {/*poster_path是他圖片的編碼，前面需要先加上原本的url*/}

        {/*如果是isLarge的row then 更改為 row_imgLarge */}
                <div className="row_poster">
                    {movies.map(movie =>(
                        <img className={`row_img ${isLarge && "row_imgLarge"}`}
                        key={movie.id}
                        src={`${url}${
                            isLarge ? movie.poster_path : movie.backdrop_path
                            }`} 
                        alt={movie.name}
                        onClick={()=> handleClick(movie)}
                        />
                    )

                )}
                </div>
                {/*if ( have trailerUrl) then show youtube  */}
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
