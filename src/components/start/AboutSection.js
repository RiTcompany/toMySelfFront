import React from 'react'

import '../../css/components/_about.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/global/_fonts.scss'
import '../../css/about.css'

import img1 from '../../images/about2.jpg'

function AboutSection() {
  return (
    <div>
        <section class="about" id="about">
            <div class="about_content">
                <div class="text">
                    <p className='about-text-header'>Больше о нас</p>
                        <p>Данная веб-платформа представляет собой инновационный инструмент для тех, 
                            кто стремится разобраться в разнообразии IT-направлений. 
                            С ее помощью пользователи могут проходить интерактивные тесты, 
                            выявлять свои сильные стороны и интересы, 
                            а также получать персонализированные рекомендации по выбору профессии в области информационных технологий. 
                            Эффективное и легкодоступное решение для всех, кто ищет свой путь в динамичном мире IT-индустрии.
                        </p>
                     
                </div>
                <div class="image">

                    <img src={img1}
                        alt="" />
                </div>
            </div>
            <div class="about_stats">
                <div class="card card-1">
                    <p className='big-cifra'>12</p>
                    <p>Экспертов</p>
                </div>
                <div class="card card-1">
                    <p className='big-cifra'>350 +</p>
                    <p>Участников</p>
                </div>
                <div class="card card-1">
                    <p className='big-cifra'>10</p>
                    <p>Менторов</p>
                </div>
                <div class="card card-1">
                    <p className='big-cifra'>6</p>
                    <p>Профессий</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection