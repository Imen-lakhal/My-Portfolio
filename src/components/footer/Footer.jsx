import React from 'react'
import {FaTwitter,FaLinkedin,FaGithub, FaBehance} from 'react-icons/fa'
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
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
            <p className="footer__copyright text-cs"> &copy; 2023 <span>Imen</span>. All Rights Reserved</p>
            <p className="footer__copyright text-cs">Developed by <span>Imen Lakhal</span></p>
        </div>
    </footer>
  )
}

export default Footer
