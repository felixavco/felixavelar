import React from 'react'; 
import img from '../../img/felixavelar.jpg';


const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row mx-auto pt-5">
          <div className="col-sm-12 col-md-5 cont1">
            <div className="img-cont">
              <img src={img} alt="Felix Avelar"/>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 cont2">
            <div className="about-text">
              <p>
                
              </p>
            </div>
            <div className="social">
              <a href="https://github.com/felixavco" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"/></a>
              <a href="https://www.linkedin.com/in/felix-avelar-a32024162/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
