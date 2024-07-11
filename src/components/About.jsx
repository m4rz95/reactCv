
import { FaCss3Alt, FaGit, FaHtml5, FaPhp, FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa6'
import '../styles/About.css'
import { IoLogoJavascript } from 'react-icons/io'
import { RiVuejsFill } from 'react-icons/ri'
import { DiCodeigniter } from 'react-icons/di'
function About() {
  return (
    <section id='about'>
    <div className="wrapper">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, minima.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum eum harum magni eius animi tempora nemo porro ea assumenda libero?</p>
          <h4>Programming Language & Tools</h4>
          <div className="skills">
          <FaHtml5 /><FaCss3Alt /><FaPhp /><IoLogoJavascript /><RiVuejsFill /><FaReact />
          <DiCodeigniter /><FaBootstrap /><FaGit />
          </div>
    </div>
</section>
  )
}

export default About