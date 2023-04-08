import './Portfolio.scss';
import { portfolioItems } from '../../data/portfoliodata';

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="bg-image">
        
      </div>
      <div className='portfolio_cartegory'>
        <div className='wlcm-text'>
          <h1>Saints Gallery</h1>
          <p>Photography</p>
        </div>

        <div className="container">
          {portfolioItems.map(cat => (
          <div style={{ backgroundImage: `url(${cat.bgImg})` }} className='container-element'>
            <h2>{cat.name}</h2>
            <button>View Gallery</button>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}