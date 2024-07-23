import React from 'react';

const About = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="title-action">
          <div className="item">
            <img src="../../../public/sao.png" alt="" /> 
            <div className="text">Etwas abonnieren</div>
          </div>
          <div className="item">
            <img src="../../../public/gach.png" alt="" /> 
            <div className="text">Unser Newsletter</div>
          </div>
          <div className="content-about">
            <span>
              Get weekly update about our product on your email, no spam guaranteed we promise ✌️
            </span>
          </div>
        </div>

        {/* Phần bên phải */}
        <div className="right-box">
          <div className="input-with-button">
            <div className="input-icon">
              <div className="div6">✉️</div> 
              <input type="email" name="email" id="email" placeholder="Enter your email" />
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
