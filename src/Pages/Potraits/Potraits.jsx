import './Potraits.scss'
import { useRef } from 'react';

import saint from '../../assets/saint.jpg'
import brad from '../../assets/brad.jpg'
import leshaga from '../../assets/leshaga.jpg'
import masego from '../../assets/masego.jpg'
import mk from '../../assets/mk.jpg'

import left from '../../assets/left.svg'
import right from '../../assets/right.svg'

export const Potraits = () => {
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
                    <h1>Portraits</h1>
                </div>
                <div className="controls">
                    <img src={left} onClick={handleScrollLeft} alt="left arrow" />
                    <img src={right} onClick={handleScrollRight} alt="right arrow" />
                </div>
                <div className='card_container' ref={containerRef}>
                    <div className="card">
                        <img src={brad} alt="" />
                        <h2>Issue 1.</h2>
                    </div>
                    <div className="card">
                        <img src={saint} alt="" />
                        <h2>Issue 2.</h2>
                    </div>
                    <div className="card">
                        <img src={leshaga} alt="" />
                        <h2>Issue 3.</h2>
                    </div>
                    <div className="card">
                        <img src={masego} alt="" />
                        <h2>Issue 4.</h2>
                    </div>
                    <div className="card">
                        <img src={mk} alt="" />
                        <h2>Issue 5.</h2>
                    </div>
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