import React, { useState, useEffect } from 'react'
import { sendGetRequest } from '../../utils/requests'

import '../../css/components/_expert.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/mentors.css'

function ExpertSection() {
    const [mentors, setMentors] = useState([])
    useEffect(() => {
        sendGetRequest('mentors')
          .then((response) => {
            setMentors(response);
            console.log(response)
          })
          .catch((error) => {
            console.error('Ошибка при получении данных', error);
          });
      }, []);
  return (
    <div>
        <section id="expert" class="expert">
            <div class="circle blur-neon expert_circle"></div>
            <div class="expert_text">
                <h1>Наши эксперты</h1>
            </div>
            <div class="expert_main" id='expert-container'>
            {mentors.map((mentor) => (
                <div class="card card-1" key={mentor.id}>
                    <div class="card_image">
                        <div class="overlay-gradient"></div>
                        <img src={mentor.photo}
                            alt="Alex Suprun"/>
                    </div>
                    <div class="card_name">
                        <h1>{mentor.name} {mentor.surname}</h1>
                    </div>
                    <div class="mentor-status1">
                        <p class="mentor-status">{mentor.status}</p>
                    </div>
                    <div class="about-me">
                        <p>{mentor.about_me}</p>
                    </div>
                    <div class="card_social">
                        <a href={`/contact/${mentor.id}`} id='test-close' className="btn btn-get-courses"><span>Записаться</span></a>
                    </div>
                </div>
            ))}
 
            </div>

        </section>

    </div>
  )
}

export default ExpertSection