import React, { useState, useEffect } from 'react';
import { sendGetRequest } from '../../utils/requests';
import '../../css/components/_faq.scss';
import "../../css/blog.css"
import { Container, Row, Col } from 'react-bootstrap';

function Events() {
  
  const [events, setEvents] = useState([]);
  const [expandedEventId, setExpandedEventId] = useState(null);

  const handleEventClick = (eventId) => {
    setExpandedEventId((prevId) => (prevId === eventId ? null : eventId));
  };


  useEffect(() => {
    sendGetRequest('events')
      .then((response) => {
        console.log(response)
        setEvents(response);

      })
      .catch((error) => {
        console.error('Ошибка при получении данных', error);
      });
  }, []);



  
  return (
    <div className='blog-container'>
    <Container>
      <Row>


      <Col>
      {events.map((event) => (
        <div key={event.id}>
        <div
          className={`event-container ${expandedEventId === event.id ? 'expanded' : ''}`}
          onClick={() => handleEventClick(event.id)}
        >         <div className='post-head'>     
                  <div className='post-indicator'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                  </svg>
                  </div>
                  <p className='post-title'><b>{event.title}</b></p>
                  </div> 
                  <p>Дата проведения: {event.date}</p> 
                  <div className='container-for-events'>
                  {expandedEventId === event.id && event.photo!== null ? <img className='post-text' src={event.photo}/> : null}
                  {expandedEventId === event.id && event.description!== null ? <div id='html-events' className='html-text' dangerouslySetInnerHTML={{ __html: event.description }}></div> : null}
                  </div>
          </div>            
        </div>
      ))}
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Events;