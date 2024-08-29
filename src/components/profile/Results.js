import React from 'react'
import avatar from '../../images/avatar.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/components/_banner.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/account.css'


import { useState, useEffect } from 'react'
import { sendGetRequest } from '../../utils/requests'
import { Link } from 'react-router-dom'


function Results() {
  const [user, setUser] = useState([]);
  const [maxKeys, setMaxKeys] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const toggleAccordion1 = () => {
    setIsActive1(!isActive1);
  };
  const toggleAccordion2 = () => {
      setIsActive2(!isActive2);
    };
  const toggleAccordion3 = () => {
      setIsActive3(!isActive3);
    };
  const toggleAccordion4 = () => {
      setIsActive4(!isActive4);
    };
  const toggleAccordion5 = () => {
      setIsActive5(!isActive5);
    };
  const toggleAccordion6 = () => {
      setIsActive6(!isActive6);
    };

    useEffect(() => {

        sendGetRequest(`users/${localStorage.getItem('userToMyseflfId')}`)
          .then((response) => {
            console.log(response)
            setUser(response);
          })
          .catch((error) => {
            console.error('Ошибка при получении данных', error);
          });
      }, []);


  useEffect(() => {
    sendGetRequest(`results/${user.result}`)
      .then((response) => {
        console.log(response);
        if (response.detail !== 'Not found.') {
     
          const values = {
            backend: parseInt(response.backend),
            data_science: parseInt(response.data_science),
            frontend: parseInt(response.frontend),
            machine_learning: parseInt(response.machine_learning),
            mobile_development: parseInt(response.mobile_development),
            ux_ui: parseInt(response.ux_ui)
          };

          const maxValues = Math.max(...Object.values(values));

          const maxKeys = [];
          for (const key in values) {
            if (values[key] === maxValues) {
              maxKeys.push(key);
            }
          }

          setMaxKeys(maxKeys);
          setIsActive(true);
        }
      })
      .catch((error) => {
        console.error('Ошибка при получении данных', error);
      });
  }, [user]);


  const backendIsMax = maxKeys.includes('backend');
  const dataScienceIsMax = maxKeys.includes('data_science');
  const frontendIsMax = maxKeys.includes('frontend');
  const machineLearningIsMax = maxKeys.includes('machine_learning');
  const mobileDevelopmentIsMax = maxKeys.includes('mobile_development');
  const uxUiIsMax = maxKeys.includes('ux_ui');

  
  return (
    <Container>
    <Row>

      {isActive ? (
        <div>
                   
        <section class="faq" id="faq2">
            <div class="faq_text">
                <h1>Ваши результаты</h1>
                <hr class="line"/>
            </div>
            <div class="faq_main">
                <div class="accordian" id='test-finale-results'>
                  {backendIsMax ? (
                    <div class={`accordian_item ${isActive1 ? 'active' : ''}`}>
                        <a href="#q1" class="link" onClick={toggleAccordion1}>
                            <p>Backend-разработчик</p>
                            <div className='faq-svg'>
                            <div class="down" name="caret-down-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                            <div  class="up" name="caret-up-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>
                            </div>
                        </a>
                        <div class="answer">
                            <p>
                            Это специалист, который занимается созданием внутренней части веб-ресурсов, разрабатывает бизнес-логику приложений, 
                            задает алгоритмы работы и обеспечивает корректное выполнение пользовательских запросов. 
                            Для начала карьеры в этой области Junior Developer должен овладеть определенным стеком технологий:<br/>
                            - Знание основных языков программирования, таких как Python, Java, PHP, C#, Ruby и др.<br/>
                            - Работа с системами управления базами данных (СУБД), включая проектирование, настройку и знание SQL, опыт работы с реляционными и нереляционными БД, например, MySQL, PostgreSQL, MongoDB.<br/>
                            - Разработка и настройка API для взаимодействия с фронтендом, проектирование REST API и SOAP.<br/>
                            - Знание паттернов проектирования и популярных фреймворков, например, React, Laravel, Django, Node.js, Next.js.<br/>
                            - Понимание принципов объектно-ориентированного программирования (ООП).<br/>
                            - Знание систем контроля версий, таких как Git и GitHub.
                            <br/>
                            <br/>
                            Более подробная <Link to='/post/backend-razrabotchik' className='more-ifo'>информация</Link>
                            </p>
                        </div>
                    </div>
                    ):(<></>)}
                    {frontendIsMax ? (
                    <div class={`accordian_item ${isActive2 ? 'active' : ''}`}>
                        <a href="#q2" class="link" onClick={toggleAccordion2}>
                            <p>Frontend-разработчик (frontend developer)</p>
                            <div className='faq-svg'>
                                <div class="down" name="caret-down-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                            <div  class="up" name="caret-up-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>
                            </div>
                        </a>
                        <div class="answer">
                            <p>
                            Это специалист, который занимается созданием пользовательского интерфейса для веб-сайтов, приложений или программного обеспечения. В 2023 году для джуниор-специалиста в этой области требуются следующие навыки:<br/>
                            1. Знание HTML и CSS, включая кроссбраузерную и адаптивную верстку, а также использование популярных CSS-фреймворков, препроцессоров и HTML-шаблонизаторов.<br/>
                            2. Навыки работы с JavaScript, особенно со стандартом Ecmascript 6, который внёс в язык новые элементы синтаксиса и повысил производительность.<br/>
                            3. Базовые навыки работы в консоли и использования пакетного менеджера NPM для быстрой загрузки JavaScript-библиотек и приложений.<br/>
                            4. Умение работать с системой контроля версий Git, что позволяет отслеживать изменения в коде и совместную работу над проектами.<br/>
                            5. Знание работы со сборщиком проектов, таким как gulp.js, для автоматизации процесса сборки и запуска приложения из командной строки.<br/>
                            6. Базовое знание одного из современных фреймворков: React, Angular или Vue.js. Эти фреймворки позволяют уменьшить количество обращений к DOM и организовать мгновенный обмен данными с сервером через API, обеспечивая пользователям быстрый отклик приложения.<br/>
                            Также важно понимать, что освоив один из фреймворков, специалист сможет быстро разобраться с другими, если возникнет необходимость.
                            <br/>
                            <br/>
                            Более подробная <Link to='/post/frontend-razrabotchik' className='more-ifo'>информация</Link>
                            </p>
                        </div>
                    </div>
                    ):(<></>)}
                    {uxUiIsMax ? (
                    <div class={`accordian_item ${isActive3 ? 'active' : ''}`}>
                        <a href="#q3" class="link" onClick={toggleAccordion3}>
                            <p>UX/UI-дизайнер</p>
                            <div className='faq-svg'>
                            <div class="down" name="caret-down-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                            <div  class="up" name="caret-up-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>
                            </div>
                        </a>
                        <div class="answer">
                            <p>
                            Это специалист в области информационных технологий, 
                            который занимается проектированием и разработкой пользовательского интерфейса для различных цифровых продуктов, 
                            таких как приложения, сайты и программы. Они анализируют и опираются на пользовательский опыт, 
                            стремясь обеспечить удобство взаимодействия с продуктом и делая его использование максимально 
                            простым для любого пользователя. Специалист по UX фокусируется на создании интерфейсов, 
                            которые легко понимать и использовать, обеспечивая удобство взаимодействия с сайтом, 
                            приложением или другими цифровыми продуктами. Они стремятся устранить проблемы при поиске информации на 
                            сайте или выполнении процессов в приложении, чтобы пользователи могли достичь своих целей без лишних усилий.
                            <br/>
                            <br/>
                            Более подробная <Link to='/post/uiux-dizajner' className='more-ifo'>информация</Link>
                            </p>
                        </div>
                    </div>
                    ):(<></>)}
                    {dataScienceIsMax ? (
                    <div class={`accordian_item ${isActive4 ? 'active' : ''}`}>
                        <a href="#q4" class="link" onClick={toggleAccordion4}>
                            <p>Специалист по науке о данных (Data Scientist)</p>
                            <div className='faq-svg'>
                            <div class="down" name="caret-down-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                            <div  class="up" name="caret-up-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>
                            </div>
                        </a>
                        <div class="answer">
                            <p>
                            Он использует методы анализа данных для работы с большими объемами информации. 
                            Он строит и проверяет математические модели, 
                            чтобы выявить закономерности или сделать прогнозы о будущих значениях. 
                            Например, на основе данных о прошлом спросе на товары, 
                            специалист по науке о данных может прогнозировать продажи в следующем году. 
                            Для создания моделей используются алгоритмы машинного обучения, а для работы с базами данных - SQL. 
                            Необходимо иметь хорошее понимание математики, включая линейную алгебру, 
                            теорию вероятности, статистику и математический анализ. 
                            Математические модели помогают выявлять закономерности и прогнозировать будущие значения. 
                            Для практического применения этих моделей необходимы навыки программирования на Python, 
                            работа с SQL и использование библиотек и фреймворков для машинного обучения, таких как NumPy и Scikit-learn. 
                            Для решения более сложных задач может потребоваться знание языков программирования С или C++. 
                            Результаты анализа данных необходимо уметь визуализировать, например, 
                            с использованием библиотек Seaborn, Plotly или Matplotlib.
                            <br/>
                            <br/>
                            Более подробная <Link to='/post/data-science' className='more-ifo'>информация</Link>
                            </p>
                        </div>
                    </div>
                    ):(<></>)}
                    {machineLearningIsMax ? (
                    <div class={`accordian_item ${isActive5 ? 'active' : ''}`}>
                        <a href="#q5" class="link" onClick={toggleAccordion5}>
                            <p>Специалист по машинному обучению (ML-специалист)</p>
                            <div className='faq-svg'>
                            <div class="down" name="caret-down-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                            <div  class="up" name="caret-up-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>
                            </div>
                        </a>
                        <div class="answer">
                            <p>
                            Специалист по машинному обучению (ML) разрабатывает модели, 
                            которые могут самостоятельно обучаться на различных типах данных, 
                            включая табличные данные, изображения и тексты. Он исследует сложные закономерности в данных, 
                            чтобы модели точнее предсказывали результаты и помогали автоматизировать процессы принятия решений для сложных задач. 
                            Машинное обучение является частью искусственного интеллекта и включает в себя такие области, 
                            как глубокое обучение и нейронные сети. 
                            Для работы в области машинного обучения необходимы серьезные математические навыки, 
                            такие как линейная алгебра, математический анализ, статистика и теория вероятностей. 
                            ML-специалисты используют различные алгоритмы, такие как линейная и логистическая регрессии, 
                            деревья решений, Байесовский классификатор, бустинг и другие. 
                            Они должны иметь хорошую математическую подготовку для оптимального использования этих алгоритмов в зависимости 
                            от структуры и размеров данных.
                            <br/>
                            <br/>
                            Более подробная <Link to='/post/ml-specialist' className='more-ifo'>информация</Link>
                            </p>
                        </div>
                    </div>
                    ):(<></>)}

                    {mobileDevelopmentIsMax ? (
                    <div class={`accordian_item ${isActive6 ? 'active' : ''}`}>
                        <a href="#q6" class="link" onClick={toggleAccordion6}>
                            <p>Мобильный разработчик</p>
                            <div className='faq-svg'>
                            <div class="down" name="caret-down-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                            <div  class="up" name="caret-up-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>
                            </div>
                        </a>
                        <div class="answer">
                            <p>
                            Mobile-developer - это специалист в области информационных технологий, 
                            который занимается созданием приложений для смартфонов и планшетов на платформах iOS и Android. 
                            Он является программистом, который использует языки программирования Java, 
                            Objective-C или Swift в зависимости от платформы разработки. 
                            Для начинающих рекомендуется изучать основы объектно-ориентированного программирования (ООП), 
                            предпочтительно на примере языка Java. После освоения основ программирования на Java, следует практиковаться, 
                            создавая программы различной сложности. 
                            Затем можно перейти к изучению особенностей разработки для мобильных платформ Android или iOS.
                            Mobile developer должен выполнять такие задачи: <br/>
                            - Разработка мобильных приложений для Андроид и iOS; <br/>
                            - Создание архитектуры решения (сервер, клиент и т. д.); <br/>
                            - Создание технических задания для других разработчиков; <br/>
                            - Выбор и анализ эффективности проектного решения; <br/>
                            - Поддержка созданных приложений; <br/>
                            - Работа в команде с другими разработчиками.
                            <br/>
                            <br/>
                            Более подробная <Link to='/post/mobilnyj-razrabotchik' className='more-ifo'>информация</Link>
                            </p>
                        </div>
                    </div>
                    ):(<></>)}
                </div>
            </div>
        </section>
        </div>
      ):(
        <>
            <Col className='results-section'>
            <div class="text-area">
                <div class="text-part">
                    <h1 className='about-test'>Войдите в мир <span>IT</span> с нами!</h1>
                    <p>Пройдите тест на профориентацию в сфере IT, познакомьтесь с экспертами и запишитесь на консультацию к ним прямо сейчас.</p>
                </div>
                <div class="button-group" id="about-test-button-group">
                    <a href="/test" className="btn btn-learnmore" id="about-test-button">Пройти тест</a>
                </div>
            </div>
            </Col>
        </>
      )}
    
    </Row>
    </Container>
  )
}

export default Results