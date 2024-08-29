import React from 'react'
import { useState } from 'react'
import { Icon28Send, Icon28LogoVkColor, Icon28PhoneCircleFillGreen } from '@vkontakte/icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import '../../css/components/_header.scss'
import '../../css/components/_classes.scss'
import '../../css/nav.css'
import '../../css/navbar.css'
import tgIcon from "../../images/icons8.svg"


import logo from '../../images/pslogo.png'
import { sendGetRequest } from '../../utils/requests';


function Header() {
  let prevScrollpos = window.scrollY;

  window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("scroll-header").style.top = "0";
      document.getElementById("navbar").style.top = "45px"; 

    } else {
      document.getElementById("navbar").style.top = "0px"; 
      document.getElementById("scroll-header").style.top = "-45px";  

    }
    prevScrollpos = currentScrollPos;
  }
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  async function getMeta(url) {
    try {
      let response = await sendGetRequest(
        "meta/" + (url === "/" ? "main" : url.replaceAll("/", "$").slice(1))
      );
      setTitle(response["data"]["title"]);
      setDescription(response["data"]["description"]);
    } catch (e) {
      console.log(e + " META ERROR");
    }
  }

  useEffect(() => {
    getMeta(location.pathname + location.search);
  }, [location]);

  return (
    <header className='header' >
      <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      </Helmet>
      <div className='info_for_us' id="scroll-header">
      <p  className="navbar-phone" style={{paddingTop: "10px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{marginRight: "15px"}} fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>
        +7 (953) 280-62-70 
      </p>
      <div>
      <a href="https://t.me/pro_sebya_v_it"><svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "22px"}} viewBox="0 0 48 48" width="28px" height="28px">
        <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#33bef0"/><stop offset="1" stop-color="#0a85d9"/></linearGradient>
          <path fill="url(#BiF7D16UlC0RZ_VqXJHnXa)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
          <path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"/>
          <path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"/>
          <path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"/>
      </svg></a>
      <a href="https://vk.com/pro_sebya_v_it" style={{marginLeft: "20px"}}><Icon28LogoVkColor style={{marginTop: "11px"}}/></a>
      </div>
      </div>
    
    <div class="navigation" id="navbar">
    <Link class="logo" to='/'>
        <img src={logo} alt="logo" style={{marginBottom: '10px'}}/>
    </Link>

    <a className={`menu-hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}/>

   
    <nav class="navbar" >
        <ul class="navbar-list" id="primary-navbar" data-visiable="false">
            <li><a href="/" class="navbar-links">Главная</a></li>
            <li><a href="/events" class="navbar-links">Мероприятия</a></li>
            <li><a href="/about" style={{minWidth: '56px'}} class="navbar-links">О нас</a></li>
            <li><a href="/contact" class="navbar-links">Контакты</a></li>
            <li><a href="/mentors" class="navbar-links">Менторы</a></li>
            <li><a href="/blog" class="navbar-links">Блог</a></li>
            {localStorage.getItem('userToMyseflfId') ? (
            <li><a href="/account" class="btn btn-get-courses"><span>Профиль</span></a></li>
            ):(
            <li><a href="/reg" class="btn btn-get-courses"><span>Регистрация</span></a></li>
            )}
        </ul>
    </nav>
    </div>

    <nav className={`navbar-toggle ${isOpen ? 'open' : ''}`}>
        <ul className='nav-id' id="primary-navbar" data-visiable="false">
            <div className='navbar-close'>
            <a className='button-close' onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
            </a>
            </div>
            <li><a href="/" class="navbar-links">Главная</a></li>
            <li><a href="/events" class="navbar-links">Мероприятия</a></li>
            <li><a href="/about" style={{minWidth: '56px'}} class="navbar-links">О нас</a></li>
            <li><a href="/contact" class="navbar-links">Контакты</a></li>
            <li><a href="/mentors" class="navbar-links">Менторы</a></li>
            <li><a href="/blog" class="navbar-links">Блог</a></li>
            <div className='prof-button'>
            {localStorage.getItem('userToMyseflfId') ? (
            <li><a href="/account" class="btn btn-get-courses"><span className='togglle-profile'>Профиль</span></a></li>
            ):(
            <li><a href="/reg" class="btn btn-get-courses"><span className='togglle-profile2'>Регистрация</span></a></li>
            )}
            </div>
        </ul>
    </nav>
    </header>
    
  )
}

export default Header