import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="main-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#">Beleuchtung <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Submenu 1-1</a></li>
              <li><a href="#">Submenu 1-2</a></li>
              <li><a href="#">Submenu 1-3</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#">Growbox <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Submenu 2-1</a></li>
              <li><a href="#">Submenu 2-2</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#">Dünger <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Submenu 3-1</a></li>
              <li><a href="#">Submenu 3-2</a></li>
              <li><a href="#">Submenu 3-3</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#">Erde & Substrate <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Submenu 4-1</a></li>
              <li><a href="#">Submenu 4-2</a></li>
              <li><a href="#">Submenu 4-3</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#">Töpfe & Behälter <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Eckige Töpfe</a></li>
              <li><a href="#">Runde Töpfe</a></li>
              <li><a href="#">Untersetzer</a></li>
              <li><a href="#">Pflanzschalen</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#">Bewässerung <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Submenu 6-1</a></li>
              <li><a href="#">Submenu 6-2</a></li>
              <li><a href="#">Submenu 6-3</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#">Pflanzen & Gärtnern <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Submenu 7-1</a></li>
              <li><a href="#">Submenu 7-2</a></li>
              <li><a href="#">Submenu 7-3</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#">Lüftung & Klimaanlage <i className="fas fa-chevron-down"></i></a>
            <ul className="sub-menu">
              <li><a href="#">Submenu 8-1</a></li>
              <li><a href="#">Submenu 8-2</a></li>
              <li><a href="#">Submenu 8-3</a></li>
            </ul>
          </li>
        </ul>
      </div>
  )
}

export default Navbar