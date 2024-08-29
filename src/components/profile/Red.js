import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { baseApiUrl, sendGetRequest} from '../../utils/requests';
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../css/components/_classes.scss'
import '../../css/components/_header.scss'

import '../../css/reg.css'

function Red() {

    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [nameData, setNameData] = useState({ 
        name: '',
        surname: '',
        patronymic: '',
        telegram: '',
        city: '',
        about_me: '',

    });

    useEffect(() => {

        sendGetRequest(`users/${localStorage.getItem('userToMyseflfId')}`)
          .then((response) => {
            console.log(response)
            setUser(response);
            if (user) {
                setNameData({
                    ...nameData,
                    name: response.name,
                    surname: response.surname,
                    patronymic: response.patronymic,
                    telegram: response.telegram,
                    city: response.city,
                    about_me: response.about_me,

                  });
           
            }

          
        })
          .catch((error) => {
            console.error('Ошибка при получении данных', error);
          });
      }, []);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNameData({ ...nameData, [name]: value });
    };

  

    const handleRedData = async () => {
        try {
          const formData = new FormData();

          // Assuming nameData is a dictionary object
          for (const key in nameData) {
             if (nameData[key]) {
                 formData.append(key, nameData[key]);
             }
          }
          const response = await axios.put(`${baseApiUrl}users/${localStorage.getItem('userToMyseflfId')}`, formData,
           {
            headers: {
              
              'Content-Type': 'multipart/form-data',
            },
          });
          
          console.log(response.data);
   
        } catch (error) {
          console.error(error);
        }
      };
  return (
    
    <Container>
    <div>
        
    <Row>
        <Col>
        <div className="form-container-login" >
            <Form className='form-red-user' onSubmit={handleRedData}>



                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                
                <Form.Control
                style={{height: '50px', borderRadius: '25px'}}
                    seze="lg"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    className='login'
                    value={nameData.name}
                    onChange={handleInputChange}

                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                
                <Form.Control
                style={{height: '50px', borderRadius: '25px'}}
                    seze="lg"
                    type="text"
                    name="surname"
                    placeholder="Фамилия"
                    className='login'
                    value={nameData.surname}
                    onChange={handleInputChange}

                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                
                <Form.Control
                style={{height: '50px', borderRadius: '25px'}}
                    seze="lg"
                    type="text"
                    name="patronymic"
                    placeholder="Отчество"
                    className='login'
                    value={nameData.patronymic}
                    onChange={handleInputChange}

                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                
                <Form.Control
                style={{height: '50px', borderRadius: '25px'}}
                    seze="lg"
                    type="text"
                    name="city"
                    placeholder="Город"
                    className='login'
                    value={nameData.city}
                    onChange={handleInputChange}

                />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                
                <Form.Control
                style={{height: '50px', borderRadius: '25px'}}
                    seze="lg"
                    type="text"
                    name="telegram"
                    placeholder="telegram"
                    className='login'
                    value={nameData.telegram}
                    onChange={handleInputChange}

                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                
                <Form.Control
                style={{height: '80px', borderRadius: '25px'}}
                    seze="lg"
                    type="text"
                    as="textarea"
                    rows={6}
                    name="about_me"
                    placeholder="Обо мне"
                    className='about_me_plase'
                    value={nameData.about_me}
                    onChange={handleInputChange}

                />
                </Form.Group>



                <Row>
                <Col>
                <Alert show={showError} variant="danger" className='custom-alert' onClose={() => setShowError(false)} dismissible>
                            Неправильный логин или пароль
                        </Alert>
                </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'right', marginBottom: '13px'}}>
                        <Button className='button' variant="dark" size='lg' type="submit">
                            Сохранить
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <Link to='/account' style={{width: '100%'}}>
                        <Button className='button'style={{ width: '100%'}} variant="dark" size='lg'>
                            Назад
                        </Button>
                      </Link>
                    </Col>
                </Row>

            </Form>

        </div>
        </Col>
        </Row>
    </div>
    </Container>


  )
}

export default Red
