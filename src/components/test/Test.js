import React, { useState } from 'react';
import questions from './questionsData';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/test.css'
import QuestionPanel from './QuestionPanel';
import { useEffect } from 'react';
import { sendPostRequest } from '../../utils/requests';
import { Alert } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseApiUrl } from '../../utils/requests';
import { sendGetRequest } from '../../utils/requests';

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalCheck, setShowModalChek] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentId, setCurrentId]= useState([])
  const [showError, setShowError] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleCloseChek = () => setShowModalChek(false);
  const [user, setUser] = useState([]);

  const [formData, setFormData] = useState({ 
    frontEnd: 0,
    backEnd: 0,
    ux_ui: 0,
    data_science: 0,
    mobile: 0,
    ml: 0,
});


useEffect(() => {

  sendGetRequest(`users/${localStorage.getItem('userToMyseflfId')}`)
    .then((response) => {
      console.log(response);
      setUser(response);
      if (response && response.name && response.surname && response.patronymic && response.telegram && response.city) {
        console.log(response);
        setShowModalChek(false);
      } else {
        setShowModalChek(true);
      }
  })
    .catch((error) => {
      console.error('Ошибка при получении данных', error);
    });
}, []);

  const onAnswer = (step) => {


    setCurrentQuestion(currentQuestion + step);
    setCurrentAnswers(answers[questions[currentQuestion + step].id] || []);
  };


  const handleCheckboxChange = (option) => {
    const updatedAnswers = currentAnswers.includes(option)
      ? currentAnswers.filter((ans) => ans !== option)
      : [...currentAnswers, option];
    setCurrentAnswers(updatedAnswers);
  };

  const handleInputChange = (option, id) => {
    setCurrentAnswers([option]);
    setCurrentId(id)
    setShowError(false)
    if (currentQuestion < 141){
    setCurrentQuestion(currentQuestion + 1)

    }
    if (id === 131 && option === 'Делать красивые и аккуратные сайты из дизайн-макетов'){
      setFormData(prevFormData => ({
        ...prevFormData,
        frontEnd: prevFormData.frontEnd += 1
      }));
    }
    if (id === 133 && option === 'Создавать плавные переходы и интересные анимации в мобильном приложении'){
      setFormData(prevFormData => ({
        ...prevFormData,
        frontEnd: prevFormData.frontEnd += 1
      }));
    }
    if (id === 132 && option === 'Программировать сайты так, чтобы на любых устройствах они отображались корректно'){
      setFormData(prevFormData => ({
        ...prevFormData,
        frontEnd: prevFormData.frontEnd += 1
      }));
    }
    if (id === 135 && option === 'Создавать интересные эффекты и анимации на сайте'){
      setFormData(prevFormData => ({
        ...prevFormData,
        frontEnd: prevFormData.frontEnd += 1
      }));
    }
    if (id === 140 && option === 'Оживлять статичные страницы'){
      setFormData(prevFormData => ({
        ...prevFormData,
        frontEnd: prevFormData.frontEnd += 1
      }));
    }
    if (id === 141 && option === 'Четко следовать гайдлайнам (стандартам) различных элементов'){
      setFormData(prevFormData => ({
        ...prevFormData,
        frontEnd: prevFormData.frontEnd += 1
      }));
    }
    if (id === 134 && option === 'Оформлять внешний вид сайта и создавать его структуру'){
      setFormData(prevFormData => ({
        ...prevFormData,
        frontEnd: prevFormData.frontEnd += 1
      }));
    }
    if (id === 131 && option === 'Искать ошибки и придумывать способы, как лучше их исправить'){
      setFormData(prevFormData => ({
        ...prevFormData,
        backEnd: prevFormData.backEnd += 1
      }));
    }
    if (id === 132 && option === 'Разносторонне продумывать логику и внутреннюю структуру будущей программы'){
      setFormData(prevFormData => ({
        ...prevFormData,
        backEnd: prevFormData.backEnd += 1
      }));
    }
    if (id === 141 && option === 'Уметь одинаково хорошо настраивать операционные системы и разрабатывать сайты'){
      setFormData(prevFormData => ({
        ...prevFormData,
        backEnd: prevFormData.backEnd += 1
      }));
    }
    if (id === 135 && option === 'Разбираться во всех областях программирования, пусть даже и поверхностно'){
      setFormData(prevFormData => ({
        ...prevFormData,
        backEnd: prevFormData.backEnd += 1
      }));
    }
    if (id === 136 && option === 'Анализировать разнородные данные и собирать их в единое целое'){
      setFormData(prevFormData => ({
        ...prevFormData,
        backEnd: prevFormData.backEnd += 1
      }));
    }
    if (id === 137 && option === 'Разбираться в программировании не только гаджетов, но и устройств умного дома, научных аппаратов'){
      setFormData(prevFormData => ({
        ...prevFormData,
        backEnd: prevFormData.backEnd += 1
      }));
    }
    if (id === 138 && option === 'Разрабатывать несложные игры для мобильных устройств'){
      setFormData(prevFormData => ({
        ...prevFormData,
        backEnd: prevFormData.backEnd += 1
      }));
    }
    if (id === 132 && option === 'Делать мобильное приложение удобным и понятным для пользователя'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ux_ui: prevFormData.ux_ui += 1
      }));
    }
    if (id === 133 && option === 'Быть специалистом, от внимания которого не ускользнёт ни один сдвинутый пиксель'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ux_ui: prevFormData.ux_ui += 1
      }));
    }
    if (id === 136 && option ===  'Делать сайты удобными и понятными для пользователей'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ux_ui: prevFormData.ux_ui += 1
      }));
    }
    if (id === 139 && option ===  'Пользоваться мобильными приложениями и изучать их больше, чем сайты'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ux_ui: prevFormData.ux_ui += 1
      }));
    }
    if (id === 134 && option ===  'Активно использовать в программировании микрофон, камеру, геолокацию и другие функции моб. телефона'){
      setFormData(prevFormData => ({
        ...prevFormData,
        mobile: prevFormData.mobile += 1
      }));
    }
    if (id === 140 && option ===  'Работать над программированием новых фишек мобильного приложения'){
      setFormData(prevFormData => ({
        ...prevFormData,
        mobile: prevFormData.mobile += 1
      }));
    }
    if (id === 138 && option ===  'Разрабатывать несложные игры для мобильных устройств'){
      setFormData(prevFormData => ({
        ...prevFormData,
        mobile: prevFormData.mobile += 1
      }));
    }
    if (id === 134 && option ===  'Придумывать программы, которые автоматически ищут ошибки'){
      setFormData(prevFormData => ({
        ...prevFormData,
        data_science: prevFormData.data_science += 1
      }));
    }
    if (id === 136 && option ===  'Анализировать разнородные данные и собирать их в единое целое'){
      setFormData(prevFormData => ({
        ...prevFormData,
        data_science: prevFormData.data_science += 1
      }));
    }
    if (id === 133 && option ===  'Внедрять в мобильное приложение аналитику поведения пользователя'){
      setFormData(prevFormData => ({
        ...prevFormData,
        data_science: prevFormData.data_science += 1
      }));
    }
    if (id === 141 && option ===  'Анализировать большой объем однотипной информации'){
      setFormData(prevFormData => ({
        ...prevFormData,
        data_science: prevFormData.data_science += 1
      }));
    }
    if (id === 132 && option ===  'Придумывать новые и нетривиальные способы поиска ошибок'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ml: prevFormData.ml += 1
      }));
    }
    if (id === 136 && option ===  'Находить даже минимальные расхождения между тем, как должна работать программа, и тем, как она работает сейчас'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ml: prevFormData.ml += 1
      }));
    }
    if (id === 134 && option ===  'Уметь абстрагироваться от технического сценария и понять поведение пользователя'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ml: prevFormData.ml += 1
      }));
    }
    if (id === 140 && option ===  'Скрупулезно оптимизировать приложения для меньшего потребления заряда батареи'){
      setFormData(prevFormData => ({
        ...prevFormData,
        ml: prevFormData.ml += 1
      }));
    }
  };

  useEffect(() => {
    // Этот код будет выполнен после рендера компонента или при изменении currentAnswers
    if (currentAnswers.length > 0) {
      setAnswers({
        ...answers,
        [currentId]: currentAnswers,
      });

      console.log(Object.keys(answers).length);
    }
  }, [currentAnswers, currentId]);

  const onQuestionChange = (newQuestion) => {
    setCurrentQuestion(newQuestion);
    setCurrentAnswers(answers[questions[newQuestion].id] || []);
    console.log(answers)
  };


  const handleResults = async () => {
  
    try {
      if (Object.keys(answers).length < 138) {
        setShowError(true)
      return;
      }
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0'); 

      const formattedDate = `${year}-${month}-${day}`;
      const requestData = {
        frontend: formData.frontEnd,
        backend: formData.backEnd,
        user: parseInt(localStorage.getItem('userToMyseflfId')),
        data_science: formData.data_science,
        mobile_development: formData.mobile,
        date: formattedDate,
        machine_learning: formData.ml,
        ux_ui: formData.ux_ui
      }
        var response = await sendPostRequest("results", requestData);
        console.log(response)

        var putData = new FormData();
        putData.append('result', response.id);

        try {
          const responseId = await axios.put(`${baseApiUrl}users/${localStorage.getItem('userToMyseflfId')}`, putData,
           {
            headers: {
              
              'Content-Type': 'multipart/form-data',
            },
          });
          
          console.log(responseId);
        } catch (error) {
          console.error(error);
        }

        setShowModal(true);

    } catch (error) {

    }
};

  const renderQuestion = () => {
    const question = questions[currentQuestion];

    return (
        
        <Container className='test-container'>
         <div >

         <Row>
        <h2>{question.text}</h2>
        {question.type === 'yesno' ? (
          <div>
            {question.options.map((option) => (
            <div className='questions'>
              <label key={option} className='q-text'>
                <input
                  className='q-label'
                  type="radio"
                  value={option.toLowerCase()}
                  checked={currentAnswers[0] === option}
                  onChange={() => handleInputChange(option, question.id)}
                />
                {option}
              </label>
            </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </Row>
       
        <Row className='q-bar'>
        <QuestionPanel
                questionCount={questions.length}
                currentQuestion={currentQuestion}
                onQuestionChange={onQuestionChange}
                answeredQuestions={answers|| []}
            />
        </Row>

      
      </div>

      
      </Container>
    );
  };

  return (
    <>
    <div>
        
      {renderQuestion()}
      <Container className='pagination'>
      
      <button className='pagination-button' onClick={() => onAnswer(-1)} disabled={currentQuestion === 0}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
      </svg>
      </button>

      <Alert show={showError} variant="danger" className='custom-alert' onClose={() => setShowError(false)} dismissible>
              Необходимо ответить на все вопросы
      </Alert>
    

      {currentQuestion === questions.length - 1 ?(
        <a onClick={() => handleResults()} id='test-close' className="btn btn-get-courses"><span>Завершить</span></a>
      ):(
        <>
      <button className='pagination-button' onClick={() => onAnswer(1)} >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>
      </button></>
      )}

      <Modal className='final-modal' show={showModal} onHide={handleClose}>
        <Modal.Header  className='final-modal-title'>
   
        </Modal.Header>
        <Modal.Body className='final-modal-title'>
          Результаты получены, можете посмотреть их в Профиле!
        </Modal.Body>
        <Modal.Footer className='final-modal-title'>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Link to="/account">
          <Button variant="secondary">
            Результаты
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <Modal className='final-modal' show={showModalCheck}>
        <Modal.Header  className='final-modal-title'>
   
        </Modal.Header>
        <Modal.Body className='final-modal-title'>
          Для прохождения теста заполните профиль!
        </Modal.Body>
        <Modal.Footer className='final-modal-title'>
    
          <Link to="/account">
          <Button variant="secondary">
            Профиль
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      
    
      </Container>

    </div>

    </>
  );
};

export default Test;