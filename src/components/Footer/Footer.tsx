import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="container-about">
        <div className="navbar-1">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
            <div className="icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-telegram"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </ul>
        </div>
        <div className="navbar-2">
          <div className="title-about">Um</div>
          <ul>
            <li>Kontaktiere uns</li>
            <li>Über uns</li>
            <li>Karriere</li>
            <li>Unternehmensinformationen </li>
          </ul>
        </div>
        <div className="navbar-3">
          <div className="title-about">Hilfe</div>
          <ul>
            <li>Unsere Produzenten</li>
            <li>Zahlung</li>
            <li>Versand</li>
            <li>Stornierung & Rückgabe</li>
            <li>Verstoß melden</li>
          </ul>
        </div>

        <div className="navbar-4">
          <div className="title-about">pOLITIK</div>
          <ul>
            <li>Rücknahmegarantie</li>
            <li>Nutzungsbedingungen</li>
            <li>Sicherheit</li>
            <li>Privatsphäre</li>
            <li>Seitenverzeichnis</li>
          </ul>
        </div>
      </div>
      <div className="contact-about">
        2023 hood.de , Inc.
      </div>
    </div>
  );
}

export default Footer;
