const API_KEY='b7743fa938763c3c7886cd9e9d5cd3c1';


const requests ={
    fetchTrending:  `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRate: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming:`/movie/upcoming?api_key=${API_KEY}&language=en-US`,
}

export default requests;