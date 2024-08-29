import React from 'react'
import { Icon28Send, Icon28LogoVkColor, Icon28PhoneCircleFillGreen } from '@vkontakte/icons';
import '../../css/components/_footer.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import { Link } from 'react-router-dom';

import '../../css/footer.css'

import logo from '../../images/pslogo.png'
import grantlogo from '../../images/grantlogo.png'

function Footer() {
  return (
    <div>
            <footer class="footer" id="footer">
        <div class="footer_main">
            <Link class="logo" to='/'>
                <img src={logo} alt="Webook logo"/>
            </Link>
            <div class="company" id='test-footer'>
                <h1>
                     Тестирование
                </h1>
                <ul>
                    <li>
                        <a href="/reg">  
                         Зарегистрироваться
                        </a>
                    </li>
                    <li>
                    {localStorage.getItem('userToMyseflfId') ? (
                        <a href="/test" >Пройти тест</a>
                    ):(
                        <a href="/reg" >Пройти тест</a>
                    )}

                    </li>
                    <li>
                    {localStorage.getItem('userToMyseflfId') ? (
                        <a href="/account" >Результаты</a>
                    ):(
                        <a href="/reg" >Результаты</a>
                    )}
                
                    </li>
                
                </ul>
            </div>
            <div class="resources">
                <h1>
                    Ресурсы
                </h1>
                <ul>
                    <li>
                        <a href="/events">Мероприятия</a>
                    </li>
                    <li>
                        <a href="/blog">Блог</a>
                    </li>
                    <li>
                        <a href="/mentors">Менторы</a>
                    </li>
                </ul>
            </div>
            <div class="quick">
                <h1>
                    Навигация
                </h1>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/politica.html">Политика конфиденциальности</a>
                    </li>
                    <li>
                        <a href="/contact">Контакты</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright">
        <img className="grant-logo" src={grantlogo} alt="Grant"/>
        <Link className='copyright-text' to='https://reallyintop.ru/'>© designed & built by RiT</Link>
        </div>
    </footer>
    </div>
  )
}

export default Footer