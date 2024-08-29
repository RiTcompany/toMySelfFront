import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { sendPostRequest } from '../../utils/requests';
import { useNavigate } from 'react-router-dom'; 

import '../../css/components/_classes.scss'
import '../../css/components/_header.scss'

import '../../css/reg.css'

function Login() {
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ 
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const requestData = {
                username: formData.username,
                password: formData.password,
            }
            var response = await sendPostRequest("login", requestData);
            console.log(response)
            if (response.message == "Authentication successful") {
                localStorage.setItem("authenticated", true);
                localStorage.setItem("userToMyseflfId", response.user_id)
                navigate('/');
            } else {
                setShowError(true);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };
  return (
    <div>
    <Container >
    <Row>
        <Col>
        <div className="form-container-login">
            <div style={{textAlign: 'center'}}>
                <a href='/reg' className="navbar-links">Регистрация</a>
                <a><p style={{fontWeight: 'bold', marginRight: '5px', marginLeft: '5px'}}>/</p></a>
                <a href='/login' className="navbar-links">Вход</a>
            </div>
            <Form className='form-red-user' onSubmit={handleLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                    <div className="title">
                        <Form.Label>Войдите, чтобы начать работу</Form.Label>
                    </div>
                    <Form.Control
                    style={{height: '50px', borderRadius: '25px'}}
                        seze="lg"
                        type="text"
                        name="username"
                        placeholder="Email"
                        className='login'
                        value={formData.username}
                        onChange={handleInputChange}

                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" seze="lg" >
                    <Form.Control
                        style={{height: '50px', borderRadius: '25px'}}
                        seze="lg"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        className='login'
                        value={formData.password}
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
                    <Col style={{ textAlign: 'right', }}>
                        <Button className='button' variant="dark" size='lg' type="submit">
                            Войти
                        </Button>
                    </Col>
                </Row>

            </Form>
        </div>
        </Col>
        </Row>
        
    </Container>
    </div>
  )
}

export default Login