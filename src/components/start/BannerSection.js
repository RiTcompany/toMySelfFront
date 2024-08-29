import React from 'react'

import '../../css/components/_banner.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

import causal from '../../images/causal.png'

function BannerSection() {
  return (
    <div>
        <section class="banner column-4" id="banner">
            <div class="text-area">
                <div class="text-part">
                    <h1>Войдите в мир <span>IT</span> с нами!</h1>
                    <p>Пройдите тест на профориентацию в сфере IT, познакомьтесь с экспертами и запишитесь на консультацию к ним прямо сейчас.</p>
                </div>
                <div class="button-group">
                {localStorage.getItem('userToMyseflfId') ? (
                <a href="/test" class="btn btn-start-course">Пройти тест</a>
                ):(
                <a href="/reg" class="btn btn-start-course">Пройти тест</a>
                )}
       
                </div>
            </div>
            <div class="image-area">
                <img src={causal} alt="v"/>
                
                <div class="circle"></div>
                <a href="/mentors" class="info info-expert">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>

                <span>Эксперты</span>
                </a>
                <a href="/blog" class="info info-live">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                </svg>

                    <span>Видео материалы</span>
                </a>
                <a href="/contact" class="info info-chat">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>

                    <span>Задать вопрос</span>
                </a>
                
            </div>

        </section>
    </div>
  )
}

export default BannerSection