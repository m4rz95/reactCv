import profilePicture from '../assets/profile-picture.png'
import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';
import '../styles/Header.css'
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Muhamad Umar</h3>
            <p>LITBANG - SOFTWARE ENGINEER</p>
            <div className='socialMedia'>
              <a href=""><FaInstagram /></a>
              <a href=""><FaLinkedin /></a>
              <a href=""><FaTiktok/></a>
              <a href=""><FaTwitter/></a>
            </div>
        </div>
    </header>
  )
}

export default Header