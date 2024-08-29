import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { sendGetRequest } from '../../utils/requests'
import { sendPutPhoto } from '../../utils/requests'
import Avatar from 'react-avatar';
import { useRef } from 'react'
import avatarPhoto from '../../images/avatar.jpg'


import '../../css/components/_banner.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/profile.css'
import { Link } from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedAvatar, setUploadedAvatar] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {

    sendGetRequest(`users/${localStorage.getItem('userToMyseflfId')}`)
      .then((response) => {
        console.log(response)
        setUser(response);
        setUploadedAvatar(response.photo)
      })
      .catch((error) => {
        console.error('Ошибка при получении данных', error);
      });
  }, []);

  const handleRed = async (e, file) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);
  
    try {
      var response = await sendPutPhoto(`users/${localStorage.getItem('userToMyseflfId')}`, formData);
      console.log(response);
      try {
        var getResponse = await sendGetRequest(`users/${localStorage.getItem('userToMyseflfId')}`);
        setUploadedAvatar(getResponse.photo);
      } catch (error) {
        console.error('Error in sendGetRequest:', error);
      }
    } catch (error) {
      console.error('Error in sendPutPhoto:', error);
    }
  };
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      handleRed(event, file); // Передаем file вместо selectedFile
    }
  };

  const handleButtonClick = () => {
    // Нажатие на кнопку будет вызывать выбор файла
    fileInputRef.current.click();
  };

  return (
    <Container>
    <div className='profile-container'>

    <Row>
    <Col md='auto' fluid style={{display: 'flex', marginTop: '25px', alignItems: 'center', marginRight: '4rem'}}>
        <div>
        <div>
        {uploadedAvatar ? (<Avatar src={uploadedAvatar} size="200" round />):
        (<Avatar src={avatarPhoto} size="200" round />)}
        </div>
        <div>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button className="btn btn-learnmore" onClick={handleButtonClick} style={{marginTop: '89px', marginLeft: '30px', paddingTop: "10px"}}>
            Добавить
            
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"5px", marginBottom:"5px"}} width="24" height="24" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
            </svg>

          </button>
        </div>

        
 
        </div>
        </div>
        </Col>
        <Col>

      
        <div >
        <div className='about-me' style={{  marginTop: '2rem'}}>
            <p>Email: {user.email}</p>
            <p>Имя: {user.name}</p>
            <p>Фамилия: {user.surname}</p>
            <p>Отчество: {user.patronymic}</p>
            <p>Город: {user.city}</p>
            <p>Telegram: {user.telegram}</p>
            <p>Обо мне: {user.about_me}</p>
        </div>

  
    <div className='button-form'>
    <div className="submit">
      <Link to="/redact">
      <button class="button-86">Редактировать</button>
      </Link>
    </div>
    </div>
    </div>
    </Col>
    </Row>

    </div>
    </Container>
  )
}

export default Profile