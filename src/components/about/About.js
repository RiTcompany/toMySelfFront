import React from 'react'

import '../../css/components/_features.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

function About() {
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
            <h1>О нас</h1>
            <p>Добро пожаловать в PROсебя в IT! Разблокируй свой потенциал в мире технологий с нашей инновационной платформой 
                по профориентации. Оцени свои навыки, выбери подходящую IT-карьеру, и открой двери в захватывающий мир цифровых возможностей! </p>
            <h2>Тестирования в PROсебя в IT:</h2>
            <p><b>Уникальный опыт:</b> наш тест разработан на основе самых современных методов машинного обучения,
                 предоставляя уникальный и персонализированный опыт каждому пользователю.</p>
            <p>
            <b>Сбалансированный анализ:</b> алгоритмы тщательно анализируют различные аспекты вашего
             умственного склада, включая аналитические, логические и креативные способности, 
             чтобы предоставить более полное представление о ваших сильных сторонах.
            </p>
            <p>
            <b>Мгновенные результаты:</b> благодаря эффективной обработке данных, пользователи моментально получают результаты, 
            с указанием наиболее подходящих сфер в IT, в которых они могли бы успешно реализоваться.
            </p>
            <p>
            <b>Поддержка принятия решений:</b> развернутые результаты предоставляют четкое понимание ваших предпочтений и потенциала, 
            помогая принять информированные решения о будущем обучении и карьерных путях.
            </p>
            <p>
            <b>Постоянное совершенствование:</b> алгоритмы теста постоянно обновляются на основе данных и трендов в IT-сфере, 
            чтобы предоставлять актуальную информацию и отражать динамичность технологической индустрии.
            </p>
        </div>
        <div class="image-part">
         
            <div class="overlay-color"></div>
        </div>
    </div>
    </section>
  )
}

export default About