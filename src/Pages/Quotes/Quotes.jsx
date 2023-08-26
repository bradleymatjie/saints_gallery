import './Quotes.scss'
import { useRef } from 'react';
import { quotes } from '../../Content';

import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

export const Quotes = () => {
    const containerRef = useRef(null);

    const handleScrollRight = () => {
     
        const scrollDistance = 700;
    
   
        const container = containerRef.current;
    
        
        const currentScroll = container.scrollLeft;
    
       
        const targetScroll = currentScroll + scrollDistance;
    
        
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
      };

      const handleScrollLeft = () => {
        const scrollDistance = 700;
    
        const container = containerRef.current;
    

        const currentScroll = container.scrollLeft;
    
        const targetScroll = currentScroll - scrollDistance;
    
        // Perform the smooth scroll animation
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
      };

    return (
        <section className='potraits'>
            <div className='middle'>
                <div>
                    <h1>Quotes</h1>
                </div>
                <div className="controls">
                    <img src={left} onClick={handleScrollLeft} alt="left arrow" />
                    <img src={right} onClick={handleScrollRight} alt="right arrow" />
                </div>
                <div className='card_container' ref={containerRef}>
                    {quotes.map(item => (
                        <div className="card">
                            <img src={item.img} alt="portrait image" loading='lazy' />
                            <h2>{item.title}</h2>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className='socials'>
                <a href="https://www.instagram.com/saints_gallery/" target='_'>Instagram</a>
                <a href="https://m.facebook.com/saintsGallery45/" target='_'>Facebook</a>
                <a href="https://unsplash.com/@saints_gallery" target='_'>Unsplash</a>
            </div>
        </section>
    );
}