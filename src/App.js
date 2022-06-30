import './App.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {SiHeroku} from 'react-icons/si';

function App() {
  return (
    <div className="App">
      <div className="about-me-text">
        <p>Hello. I'm Trevor Coe - a software engineer that builds everything from websites to applications. I'm currently living and working in Ohio.</p>
      </div>
        <div className='social-icons'>
          <HiOutlineMail className='social-icon-spacing'/>
          <FaLinkedin className='social-icon-spacing'/>
          <BsGithub className='social-icon-spacing'/>
          <SiHeroku className='social-icon-spacing'/>
        </div>
    </div>
  );
}

export default App;
