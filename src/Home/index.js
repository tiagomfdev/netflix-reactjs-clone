import React, { useEffect, useState } from 'react'
import Tmdb from '../Tmdb'

import FeaturedMovie from '../components/FeaturedMovie'
import MovieRow from '../components/MovieRow'

import './styles.css'
import Header from '../components/Header'

function Home() {

    const [featuredData, setFeaturedData] = useState(null)
    const [movieList, setMovieList] = useState([])
    const [headerBlack, setHeaderBlack] = useState(false)

    useEffect(() => {
      const loadAll = async () => {
        const list = await Tmdb.getHomeList()        
        setMovieList(list)

        const originals = list.filter(item => item.slug === 'originals');
        const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
        const chosen = originals[0].items.results[randomChosen]

        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

        setFeaturedData(chosenInfo)
      }  

      loadAll()
    },[])

    useEffect(() => {
        const handleScrollListener = () => {
            if(window.scrollY > 10){
                setHeaderBlack(true)
            } else {
                setHeaderBlack(false)
            }
        }

        window.addEventListener('scroll', handleScrollListener)

        return () => {
            window.removeEventListener('scroll', handleScrollListener)
        }
    },[])

    return (
        <div className='homepage'>

            <Header black={headerBlack} />
            
            {
               featuredData && 
                <FeaturedMovie item={featuredData} />
            }
            
            
            <section className='lists'>
                {
                    movieList.map((item, key) => ( <MovieRow 
                                                        key={key} 
                                                        title={item.title} 
                                                        items={item.items}
                                                    /> ))
                }
            </section>

            <footer>
                Feito com <span role='img' aria-label='coracao'>❤</span> por Tiago Machado Flor <br />
                Direitos de imagem para Netflix <br/>
                Dados utlizados do site themoviedb.org
            </footer>

            {movieList.length <= 0 &&
                <div className='home_loading'>
                    <img src='https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif' alt='Carregando' />
                </div>
            }
        </div>
    )
}

export default Home
