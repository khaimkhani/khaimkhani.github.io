
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import './index.css';
import './NavItems.css';
import './footer.css';
import './Body.css';
import Aos from "aos";
import "aos/dist/aos.css";
import me from './rippedbac.jpg';
import { Link } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs, { init } from 'emailjs-com';

init("user_PJnl9b4Ws3Dy3QhaAuOJ6");

require('dotenv').config();


const App = () => {
  
  

  useEffect(() => {
    Aos.init({duration: 900});
  }, []);

    return (
      <div>
        <Navbar />
        <Body name='first' img={me} imgId='firstImg' bg='bg1' factor={0.6}/>
        <Body name='second' bg='bg2' factor={0.9}/>
        <Body name='third' bg='bg3' factor={0.8} />
        <Footer />
      </div>
    );

}

const newWin = (url) => {
  const nW = window.open(url, '_blank', 'noopener, noreferrer');
  if (nW) {
    nW.opener = null;
  }
}

const Navbar = () => { 
  
  return (
    <nav className="NavItems">
      
      <h1 className='logo'>
        <Link to='home' smooth={true} offset={-120}>
        TAIMOR KHAN <i className='fas fa-rocket fa-sm'></i>
        </Link>
      </h1>
      <i className='navlog fab fa-linkedin fa-lg' onClick={() => newWin('https://www.linkedin.com/in/muhammad-taimor-khan-8b938b1b8/')}></i>
      <i className='navlog fab fa-github fa-lg' onClick={() => newWin('https://github.com/khaimkhani')}></i>
      
      <ul className='items'>
        <li>
          <button className='about navBut'><Link to='about' smooth={true} offset={-120}>About me</Link></button>
        </li>          
        <li>
          <button className='hire navBut'><Link to='contact' smooth={true}>Contact me</Link></button>
        </li>
      </ul>
      
    </nav>
);
}

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright <i className='fas fa-copyright'></i> 2021 Muhammad Taimor Khan.
      </p>
    </footer>
  );
}


const Body = (props) => {

  return (
      <div className='mainBody'>
        <Card name={props.name} />
        <img data-aos='fade-right' data-aos-delay='50' data-aos-easing='ease-out' src={props.img} className={props.imgId}></img>
        {props.bg && <Bg name={props.bg} speed={props.speed} factor={props.factor}/>}
      </div>
    );
  }

const First = () => {
  
  return (
    <div className='first-container' id='home'>
      <h1 data-aos='slide-right' data-aos-easing='ease-out' className='fc-heading'>WHAT I DO</h1>
      <div className='lt-container'>
        <ul className='fc-list'>
          <div data-aos='fade-right' className='langs'>
          <li>
            <h3>LANGUAGES:</h3>
          </li>
            <span>JAVASCRIPT<i className='fc-icon fab fa-js fa-xs'></i></span>
            <span>HTML5<i className='fc-icon fab fa-html5 fa-xs'></i></span>
            <span>CSS/SASS<i className='fc-icon fab fa-css3 fa-xs'></i></span>
            <span>JAVA/KOTLIN<i className='fc-icon fab fa-java fa-xs'></i></span>
            <span>PYTHON<i className='fc-icon fab fa-python fa-xs'></i></span>
          </div>
          <div data-aos='fade-left' className='tech'>
          <li>
            <h3>TECH:</h3>
          </li>
            <span>REACT + REDUX<i className='fc-icon fab fa-react fa-xs'></i></span>
            <span>JQUERY</span>
            <span>BOOTSTRAP<i className='fc-icon fab fa-bootstrap fa-xs'></i></span>
            <span>GIT<i className='fc-icon fas fa-code-branch fa-xs'></i></span>
            <span>PYTORCH</span>
            <span>OPENCV</span>
          </div>
        </ul>
      </div>
    </div>
  )
}

const Second = () => {
  // possibly do cool 'time alive' var
  const [play, setPlay] = useState(false);

  return (
    <div id='about'>
      <h1 data-aos='fade-left' data-aos-easing='ease-out' className='sc-heading'>ABOUT ME</h1>
      <div className='sc-info'>
        <span data-aos='fade-up-left' data-aos-delay='100'>22 YEAR OLD 4TH YEAR UNIVERSITY OF TORONTO</span>
        <span data-aos='fade-up-left' data-aos-delay='150'>COMPUTER SCIENCE - COGNITIVE SCIENCE - PHILOSOPHY</span>
        <span data-aos='fade-up-left' data-aos-delay='200'>FRONT-END DEVELOPER WITH AN EYE FOR DESIGN</span>
        <span data-aos='fade-up-left' data-aos-delay='250'>KNACK FOR WRITING CLEAN, EFFICIENT CODE</span>
        <span data-aos='fade-up-left' data-aos-delay='300'>EXPERIENCE WITH ML AND COMPUTER VISION FRAMEWORKS</span>
        <span data-aos='fade-up-left' data-aos-delay='350'>AND...</span>
        <span data-aos='fade-up-left' data-aos-delay='400'>SOMETIMES I MAKE BEATS <i onClick={() => setPlay(!play)} className={play ? 'fas fa-pause fa-xs' : 'fas fa-play fa-xs'}></i></span>
      </div>
    </div>
  );
}

const copyClip = (text) => {
  navigator.clipboard.writeText(text);
  toast.dark('Copied to Clipboard!');
  
}

const Third = () => {

  const [butState, setButState] = useState(false);
  const [num, setNum] = useState('+16479136994');
  const [email, setEmail] = useState('taimor.khan@mail.utoronto.ca');
  const [name, setName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameChange = (e) => {
    setName(e.target.value);
  }

  const emailChange = (e) => {
    setUserEmail(e.target.value);
  }

  const messageChange = (e) => {
    setMessage(e.target.value);
  }

  const sendEmail = () => {
    let userData = {
      name: name,
      email: user_email,
      message: message
    };

    if (!userData.message) {
      toast.error('Message cannot be empty', {autoClose: 2000, position: 'bottom-center'});
      return;
    }

    setButState(true);
    emailjs.send("service_thtycta", 'template_74zrh5x', userData).then(
      function(response) {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message received!');
      }, function(error) {
        console.log('FAILED...', error);
        toast.error('Message failed to send', {autoClose: 3000});
      });
    setTimeout(() => setButState(false), 3000);
  }

  return (
    <div id='contact'>
      <ToastContainer position='top-right' autoClose={1000} pauseOnHover/>
      <h1 data-aos='fade-right' data-aos-easing='ease-out' className='tc-heading'>CONTACT ME</h1>
      <div className='contact-info'>
        <span data-aos='zoom-out-left' data-aos-delay='100'>
          <i className='c-infoIcon fas fa-envelope fa-lg' onClick={() => copyClip(email)}></i> taimor.khan@mail.utoronto.ca
        </span>
        <span data-aos='zoom-out-left' data-aos-delay='150'>
          <i className='c-infoIcon fab fa-linkedin fa-lg' onClick={() => newWin('https://www.linkedin.com/in/muhammad-taimor-khan-8b938b1b8/')}></i>
        </span>
        <span data-aos='zoom-out-left' data-aos-delay='200'>
          <i className='c-infoIcon fas fa-phone-alt fa-lg' onClick={() => copyClip(num)}></i> +1 (647) 913 6994
        </span>
        <span data-aos='zoom-out-left' data-aos-delay='250'>
          <i className='c-infoIcon fab fa-github fa-lg' onClick={() => newWin('https://github.com/khaimkhani')}></i>
        </span>
        
        <div className='inputForms'>
          <h3 className='tc-heading2' data-aos='fade-right' data-aos-delay='300'>
            SEND ME A MESSAGE
          </h3>
          <input className='name' onChange={nameChange} name='name' placeholder='name...' data-aos='fade-right' data-aos-delay='300'></input>
          <input className='email' onChange={emailChange} name='email' type='email' placeholder='email...' data-aos='fade-right' data-aos-delay='300'></input>
          <textarea className='message' onChange={messageChange} name='message' placeholder='message...' cols='37' rows='6' data-aos='fade-right' data-aos-delay='300'></textarea>
          <button className='sendButton' disabled={butState} onClick={sendEmail} data-aos='fade-right' data-aos-delay='300'>Send {process.env.S_ID}</button>
        </div>
      </div>
    </div>
  );
}

const Bg = (props) => {


  const [offsetY, setOffset] = useState(0);
  const handleScroll = () => {
    
    setOffset(window.pageYOffset * props.factor);
    console.log(offsetY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const style = {
    transform: `translateY(${offsetY}px) skew(-15deg)`
  };

  return (
    
    <div className={props.name} style={style}>
    </div>

  );
  
}

const Card = (props) => {
  let comp;
  if (props.name === 'first') {
    comp = <First />;
    // console.log('first loaded');
  } else if (props.name === 'second') {
    comp = <Second />;
  } else {
    comp = <Third />;
  }

  return (
    <div data-aos='fade-in' className={props.name}>
      {comp}
    </div>
  );
}


export default App;