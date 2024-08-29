import React from 'react'

import '../../css/components/_features.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import { Link } from 'react-router-dom'

function FeaturesSection() {
  return (
    <section class="features" id="features">
    <div class="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"></path>
        </svg>
    </div>
    <div class="main-container column-2">
        <div class="text-part">
            <h2>О нас</h2>
            <p>Наша платформа для прохождения тестирования по профориентации в сфере IT 
                предоставляет уникальную возможность оценить свои навыки и интересы, 
                а также получить рекомендации по наиболее подходящим областям в информационных технологиях. </p>

            <div class="feature-card column-2">
            
                <div class="card card1">
                {localStorage.getItem('userToMyseflfId') ? (
                <Link to="/test" className='main-link-to'>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '15px'}} width="52" height="52" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                    <h3>Выбери свою специальность. </h3>
                    <p>
                    </p>
                </Link>
                ) : (
                    <Link to="/reg" className='main-link-to'>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '15px'}} width="52" height="52" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                        <h3>Выбери свою специальность. </h3>
                        <p>
                        </p>
                    </Link>
                )}
                </div>
            
            
                <div class="card card2">
                <Link to="/mentors" className='main-link-to'> 
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '15px'}} width="52" height="52" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                    <h3>Получите бесплатную консультацию от специалистов.</h3>
                    <p>
                    </p>
                </Link>
                </div>
            
            
                <div class="card card3">
                <Link to="/blog" className='main-link-to'>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '15px'}} width="52" height="52" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                </svg>
                    <h3>Получите доступ к статьям и видеоматериалам о работе в сфере IT</h3>
                    <p>
                    </p>
                </Link>
                </div>
            
            </div>
        </div>
        <div class="image-part">
           
            <div class="overlay-color"></div>
        </div>
    </div>
    </section>
  )
}

export default FeaturesSection