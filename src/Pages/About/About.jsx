import './About.scss'
import about from '../../assets/about.jpg'
import logo from '../../assets/logo.png'

export const About = () => {
    return (
        <section className="about">
            <div>
                {/* <h1>Saints Gallery</h1> */}
                <img src={logo} alt="" />
                <p>Hello,<br/>
                Saints_Gallery Photography, founded by Bradley Matjie, 
                is a premier photography venture based in the vibrant 
                city of Johannesburg, South Africa. 
                With an unwavering passion for visual storytelling and 
                a keen eye for detail, Bradley has carved out a niche 
                for himself in the dynamic world of photography. 
                Saints_Gallery Photography is a testament to his dedication 
                to capturing moments that transcend time, preserving them in 
                frames that echo with emotion and artistry.
                </p>
            </div>

            <div className='img_container'>
                <img src={about} alt="about me image" />
            </div>
        </section>
    );
}