import React, { useState } from 'react'
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

import './styles.css'

function MovieRow({title, items}) {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let scrollWidth = scrollX + Math.round(window.innerWidth/2) 
        scrollWidth = scrollWidth > 0 ? 0 : scrollWidth
        setScrollX( scrollWidth )
    }

    const handleRightArrow = () => {
        let scrollWidth = scrollX - Math.round(window.innerWidth/2) 
        let listWidth = items.results.length * 150;

        scrollWidth = scrollWidth < (window.innerWidth - listWidth) ? 
                                    (window.innerWidth - listWidth) : scrollWidth

        setScrollX(scrollWidth - 60)
    }

    return (
        <div className='movierow'>
            <h2>{title}</h2> 

            <div className='movierow_left' onClick={handleLeftArrow}>
                <NavigateBefore style={{fontSize: 50}} />
            </div>

            <div className='movierow_right' onClick={handleRightArrow}>
                <NavigateNext style={{fontSize: 50}} />
            </div>

            <div className='movierow_area'>

                <div className='movierow_list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150,
                }}>
                    {
                        items.results.length > 0 && 
                        items.results.map((item, key) => (
                            <div key={key} className='movierow_item'>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                    alt={item.orginal_title} 
                                /> 
                            </div>
                        ))                
                    }
                </div>
                
            </div>
        </div>
    )
}

export default MovieRow
