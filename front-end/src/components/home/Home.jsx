import React from 'react'
import profileImg from '../../assets/cv.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import CV from '../../assets/CV_Imen_Lakhal.pdf'
import {FaTwitter,FaLinkedin,FaGithub, FaBehance} from 'react-icons/fa'
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs">
                <span>Imen </span>Lakhal
            </h1>
            <p className="home__job">
                <span className="text-cs">
                    I Am
                </span> <b>Computer Science Engineering Student </b>
            </p>
            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt="" className='home__profile' />
                </div>

                <img src={shapeOne} alt="" className="shape shape__1" />
                <img src={shapeTwo} alt="" className="shape shape__2" />
                <img src={shapeTwo} alt="" className="shape shape__3" />

            </div>
            <p className="home__text">A highly motivated student and quick learner currently in my second year of engineering school, I am seeking a summer internship to apply and further develop my skills, while embarking on the initial steps of my career journey.</p>
            <div className="home__socials">
                <a href="https://www.behance.net/imenlakhal1" className="home__social-link">
                    <FaBehance />
                </a>
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="home__social-link">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Imen-lakhal" className="home__social-link">
                    <FaGithub />
                </a>
            </div>
            <div className="home__btns">
                <a download='' href={CV} className="btn text-cs">Download CV</a>
                <a href="#skills" className="hero__link text-cs">My Skills</a>
            </div>

        </div>
        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        </div>
        <div className="section__bg-wrapper">
            <span className="bg__title">
                About Me
            </span>
        </div>

    </section>
  )
}

export default Home
