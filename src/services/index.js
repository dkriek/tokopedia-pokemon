import Axios from 'axios';

export const loadMovies = async () => {
    let url = "https://reactnative.dev/movies.json"
    let data = await Axios.get(url)
    return Promise.resolve(data)
}

export const listPokemon = async () =>{
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151"
    let data = await Axios.get(url)
    return Promise.resolve(data)
}

export const detailPokemon = async (url) =>{
    let data = await Axios.get(url)
    return Promise.resolve(data)
}

 