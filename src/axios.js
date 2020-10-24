import axios from 'axios';

const axi =axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default axi;