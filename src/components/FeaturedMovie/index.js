import React from 'react'

import './styles.css'

function FeaturedMovie({item}) {
    const firstDate = new Date(item.first_air_date)
    const genres = item.genres.map(item => item.name)

    const description = item.overview.length > 500 ? item.overview.substring(0, 500) + '...' : item.overview

    

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className='featured_transparency_vertical'>
                <div className='featured_transparency_horizontal'>
                    <div className='featured_name'>{item.original_name}</div>

                    <div className='featured_info'>
                        <div className='featured_points'>{item.vote_average} pontos</div>
                        <div className='featured_year'> {firstDate.getFullYear()} </div>
                        <div className='featured_seasons'>
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}
                        </div>
                    </div>
                    <div className='featured_description'>{description}</div>
                    <div className='featured_buttons'>
                        <a className='featured_watchbutton' href={`/watch/${item.id}`}>‣ Assitir</a>
                        <a className='featured_mylistbutton' href={`/list/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className='featured_genres'>
                        <strong>Gêneros:</strong> {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie
