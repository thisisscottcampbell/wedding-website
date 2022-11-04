import React, { useState } from 'react'
import './header.css'

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  })

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <header className="header">
      <nav className="nav container">
        <p className="nav__logo">Jess & Scott</p>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
                onMouseEnter={(e) => (e.target.style.color = 'coral')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
                onMouseEnter={(e) => (e.target.style.color = 'coral')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                <i className="uil uil-user nav__icon"></i> About The Day
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#details"
                onClick={() => setActiveNav('#details')}
                className={
                  activeNav === '#details'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
                onMouseEnter={(e) => (e.target.style.color = 'coral')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Details
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
                onMouseEnter={(e) => (e.target.style.color = 'coral')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                <i className="uil uil-message nav__icon"></i> Holler
              </a>
            </li>

            <li className="nav__item">
              <a
                className="nav__link"
                style={{ color: 'darkgray' }}
                // onMouseEnter={(e) => (e.target.style.color = 'coral')}
                // onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                <i className="uil uil-file-alt nav__icon"></i> Registry coming
                soon...
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
