import React from 'react'
import { Icon28Send, Icon28LogoVkColor, Icon28PhoneCircleFillGreen } from '@vkontakte/icons';

import '../../css/components/_contact.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/contact.css'

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { sendPostRequest } from '../../utils/requests';
import { sendGetRequest } from '../../utils/requests';
import { useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';


function ContactSection() {
    const location = useLocation();
    const isStart = location.pathname === '/';
    const [mentor, setMentor] = useState([])
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    
    useEffect(() => {
        if (id) {
            sendGetRequest(`mentors/${id}`)
                .then((response) => {
                    setMentor(response);
                    console.log(response);
                })
                .catch((error) => {
                    console.error('Ошибка при получении данных', error);
                });
        }
    }, [id]);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        telegram: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (id)
        {
            const requestData = {
                mail: formData.email,
                telegram: formData.telegram,
                message: formData.message,
                user: parseInt(localStorage.getItem('userToMyseflfId')),
                mentor: mentor.id,
                description: `${mentor.name} ${mentor.surname} ${mentor.status}`

              }
           
            var response = await sendPostRequest("appointments", requestData);
            console.log(response);
            setShowModal(true);
            setFormData({
              username: '',
              email: '',
              telegram: '',
              message: ''
            });
        }
        else
        {
            const requestData = {
                mail: formData.email,
                telegram: formData.telegram,
                message: formData.message,
                user: parseInt(localStorage.getItem('userToMyseflfId')),
            }
        
            var response = await sendPostRequest("contacts", requestData);
            console.log(response);
            setShowModal(true);
            setFormData({
            username: '',
            email: '',
            telegram: '',
            message: ''
            });
        }
      };
  return (
    <div className='contact-cont'>
        <section class="contact" id="contact">
            
            <div class="contact_text">
                <h2 className='contact-head-text'>Контакты</h2>
            </div>
            <div className='description-section-contact'><p className='text-description-contact'>Опишите ваш запрос и мы свяжемся с вами в течении суток.</p></div>
            <div class="contact_main">
                
                <div class="input">
                    <form action="contact" onSubmit={handleSubmit}>
                        <div class="name">
                            <label for="username">Имя</label>
                            <input 
                                type="text" 
                                placeholder="Иван Иванов" 
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}/>
                        </div>
                        <div class="email">
                            <label for="useremail">Email</label>
                            <input 
                                type="email" 
                                placeholder="John@gmail.com" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}/>
                        </div>
                        <div class="name">
                            <label for="useremail">Telegram</label>
                            <input 
                                type="text" 
                                placeholder="@ivan31"
                                id="telegram"
                                name="telegram"
                                value={formData.telegram}
                                onChange={handleChange}
                                />
                        </div>
                        <div class="textarea">
                            <label for="usertext">Опишите запрос</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                ></textarea>
                        </div>
                        <div class="submit">
                            <button class="button-86">Отправить</button>
                        </div>
                    </form>
                    <Modal className='final-modal' show={showModal} onHide={handleClose}>
                        <Modal.Header  className='final-modal-title'>
                
                        </Modal.Header>
                        <Modal.Body className='final-modal-title'>
                        Ваше сообщение отправлено!
                        </Modal.Body>
                        <Modal.Footer className='final-modal-title'>
                        <Button variant="secondary" onClick={handleClose}>
                            Закрыть
                        </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div class="details">
                    <div class="details_text">
                        
                        <p>Обращаться по организационным вопросам:</p>
                    </div>
                    <ul>
                        <li>
                            <p className='cont-text'>+7 (953) 280-62-70
                            <div className='cont-svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            </div>
                            </p>
                        </li>
                        <li>
                            <p className='cont-text'>Marina_izotova@itmo.ru
                            <div className='cont-svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" color="--blue" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            </div>
                            </p>
                        </li>

                    </ul>
                    <div class="social">
                        <div class="box">
                            <a href="https://t.me/pro_sebya_v_it">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px">
                                <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#33bef0"/><stop offset="1" stop-color="#0a85d9"/></linearGradient>
                                <path fill="url(#BiF7D16UlC0RZ_VqXJHnXa)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
                                <path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"/>
                                <path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"/>
                                <path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"/>
                            </svg>
                            </a>
                        </div>
                        <div class="box">
                            <a href="https://vk.com/pro_sebya_v_it">
                                <Icon28LogoVkColor/>
                            </a>
                        </div>
                        <div class="box">
                            <a href="https://wa.me/79532806270">
                                <Icon28PhoneCircleFillGreen/>
                            </a>
                        </div>
                    </div>
                    <div class="details_text" style={{marginTop: '2.8rem'}}>
                        
                        <p>Обращаться по техническим вопросам:</p>
                    </div>
                    <ul>
                        <li>
                            <p className='cont-text'>+7 (981) 153-43-60
                            <div className='cont-svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            </div>
                            </p>
                        </li>
                        <li>
                            <p className='cont-text'>dashamalkina01@gmail.com
                            <div className='cont-svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" color="--blue" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            </div>
                            </p>
                        </li>

                    </ul>
                    <div class="social">
                        <div class="box">
                            <a href="https://t.me/malkinadasha">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px">
                                <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#33bef0"/><stop offset="1" stop-color="#0a85d9"/></linearGradient>
                                <path fill="url(#BiF7D16UlC0RZ_VqXJHnXa)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
                                <path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"/>
                                <path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"/>
                                <path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"/>
                            </svg>
                            </a>
                        </div>
                        <div class="box">
                            <a href="https://vk.com/dashkamalkina">
                                <Icon28LogoVkColor/>
                            </a>
                        </div>
                        <div class="box">
                            <a href="https://wa.me/79811534360">
                                <Icon28PhoneCircleFillGreen/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default ContactSection