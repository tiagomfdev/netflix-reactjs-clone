const API_KEY = '1013241b1dc331aa3c220cf1dfc33b89'
const API_URL_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return (
            [
                {
                    slug: 'originals',
                    title: 'Originais do Netflix',
                    items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'trending',
                    title: 'Recomendados para Voce',
                    items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'toprated',
                    title: 'Em Alta',
                    items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'action',
                    title: 'Acao',
                    items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'comedy',
                    title: 'Comedia',
                    items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'horror',
                    title: 'Terror',
                    items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'romance',
                    title: 'Romance',
                    items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'documentary',
                    title: 'Documentarios',
                    items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
                },
            ]
        )
    },

    getMovieInfo: async (movieId, type) => {              
        return movieId ? await basicFetch(`/${type}/${movieId}?language=pt-BR&api_key=${API_KEY}`) : null
    }
}