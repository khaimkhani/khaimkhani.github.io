
import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import './NavItems.css';
import './footer.css';
import './Body.css';
import Aos from "aos";
import "aos/dist/aos.css";
import me from './rippedbac.jpg';
import { Link } from 'react-scroll';


const App = () => {
  
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    Aos.init({duration: 900});
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <div>
        <Navbar />
        <Body name='first' img={me} imgId='firstImg' bg='bg1' off={offsetY} factor={0.2} />
        <Body name='second' bg='bg2' />
        <Body name='third' bg='bg3' />
        <Footer />
      </div>
    );

}

const Navbar = () => { 
  
  return (
    <nav className="NavItems">
      
      <h1 className='logo'>
        <Link to='home' smooth={true} offset={-120}>
        TAIMOR KHAN <i className='fas fa-rocket fa-sm'></i>
        </Link>
      </h1>
      <i className='navlog fab fa-linkedin fa-lg'></i>
      <i className='navlog fab fa-github fa-lg'></i>
      
      <ul className='items'>
        <li>
          <button className='about'><Link to='about' smooth={true} offset={-120}>About me</Link></button>
        </li>          
        <li>
          <button className='hire'><Link to='contact' smooth={true}>Contact me</Link></button>
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
        {props.bg && <Bg name={props.bg}/>}
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

const Third = () => {
  return (
    <div id='contact'>
      <h1 data-aos='fade-right' data-aos-easing='ease-out' className='tc-heading'>CONTACT ME</h1>
      <div className='contact-info'>
        <span data-aos='zoom-out-left' data-aos-delay='100'>
          <i className='c-infoIcon fas fa-envelope fa-lg'></i> taimor.khan@mail.utoronto.ca
        </span>
        <span data-aos='zoom-out-left' data-aos-delay='150'>
          <i className='c-infoIcon fab fa-linkedin fa-lg'></i>
        </span>
        <span data-aos='zoom-out-left' data-aos-delay='200'>
          <i className='c-infoIcon fas fa-phone-alt fa-lg'></i> +1 (647) 913 6994
        </span>
        <span data-aos='zoom-out-left' data-aos-delay='250'>
          <i className='c-infoIcon fab fa-github fa-lg'></i>
        </span>
        <h3 className='tc-heading2' data-aos='fade-right' data-aos-delay='300'>
          SEND ME A MESSAGE
        </h3>
      
      </div>
    </div>
  );
}

const Bg = (props) => {

  let offs = props.off * props.factor;

  return (
    <div className={props.name}>
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