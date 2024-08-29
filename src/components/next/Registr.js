import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { sendPostRequest } from '../../utils/requests';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../css/components/_classes.scss'
import '../../css/components/_header.scss'

import '../../css/reg.css'

function Registr() {
    const [showError, setShowError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [hasErrorEmail, setHasErrorEmail] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [hasErrorPassword, setHasErrorPassword] = useState(false);
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [hasErrorPassword2, setHasErrorPassword2] = useState(false);
    const [errorMessagePassword2, setErrorMessagePassword2] = useState("");
    const handleClose = () => setShowModal(false);
    const [formData, setFormData] = useState({ 
        username: '',
        password: '',
        password2: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {

            if (formData.password !== formData.password2 && formData.password === '') {
                console.error('Passwords do not match');
                return;
            }
            if (formData.password.length < 10 || !/^[a-zA-Z0-9]+$/.test(formData.password)) {
                console.error('Password must be at least 10 characters long and contain only letters and numbers');
                return;
            }
            if (hasErrorEmail===true){
                console.error('Passwords do not match');
                return;
            }

            const requestData = {
                username: formData.username,
                password: formData.password,
                email: formData.username
            }
            var response = await sendPostRequest("register/user", requestData);
            console.log(response)

            if (response.id) {
                console.log(response); 
                setShowModal(true);
            } else {
                setShowError(true)
            }


        } catch (error) {
            setShowError(true)
        }
    };



  return (
    <div >
    <Container>
    <Row>
        <Col>
        <div className="form-container-login">
            <Row>
            <div style={{textAlign: 'center'}}>
                <a href='/reg' className="navbar-links">Регистрация</a>
                <a><p style={{fontWeight: 'bold', marginRight: '5px', marginLeft: '5px'}}>/</p></a>
                <a href='/login' className="navbar-links">Вход</a>
            </div>
            </Row>
            <Row>
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
                        onBlur={() => {
                            if (formData.username !== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.username))  {
                              setHasErrorEmail(true);
                              setErrorMessageEmail("Введите email");
                              document.querySelector('[name="username"]').classList.add('error');
                             
                            }
                          }}
                          onFocus={() => {
                            setHasErrorEmail(false);
                            setErrorMessageEmail("");
                            document.querySelector('[name="username"]').classList.remove('error');
                          }}

                    />
                {hasErrorEmail && <div className="error-message">{errorMessageEmail}</div>}
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
                        onBlur={() => {
                            if (formData.password.length < 10 )  {
                              setHasErrorPassword2(true);
                              setErrorMessagePassword2("Пароль должен быть не меньше 10 символов");
                              document.querySelector('[name="password"]').classList.add('error');
                             
                            }
                            if ( !/^[a-zA-Z0-9]+$/.test(formData.password))  {
                                setHasErrorPassword2(true);
                                setErrorMessagePassword2("Некоректные символы");
                                document.querySelector('[name="password"]').classList.add('error');
                               
                              }
                          }}
                          onFocus={() => {
                            setHasErrorPassword2(false);
                            setErrorMessagePassword2("");
                            document.querySelector('[name="password"]').classList.remove('error');

                          }}

                    />
                {hasErrorPassword2 && <div className="error-message">{errorMessagePassword2}</div>}
                </Form.Group>

                <Form.Group className="mb-3"  seze="lg" >
                    <Form.Control
                        style={{height: '50px', borderRadius: '25px'}}
                        seze="lg"
                        type="password"
                        name="password2"
                        placeholder="Повторите пароль"
                        className='login'
                        value={formData.password2}
                        onChange={handleInputChange}
                        onBlur={() => {
                            if (formData.password !== formData.password2 && formData.password2 !== '')  {
                              setHasErrorPassword(true);
                              setErrorMessagePassword("Пароли должны совпадать");
                              document.querySelector('[name="password2"]').classList.add('error');
                              document.querySelector('[name="password"]').classList.add('error');
                             
                            }
                          }}
                          onFocus={() => {
                            setHasErrorPassword(false);
                            setErrorMessagePassword("");
                            document.querySelector('[name="password"]').classList.remove('error');
                            document.querySelector('[name="password2"]').classList.remove('error');
                          }}
                    />
                {hasErrorPassword && <div className="error-message">{errorMessagePassword}</div>}
                </Form.Group>
                <Row>
                <Col>
                <Alert show={showError} variant="danger" className='custom-alert' onClose={() => setShowError(false)} dismissible>
                            Пользователь уже существует
                        </Alert>
                </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'right', }}>
                        <Button className='button' variant="dark" size='lg' type="submit">
                            Зарегистрироваться
                        </Button>
                    </Col>
                </Row>

            </Form>
            </Row>

        <Modal className='final-modal' show={showModal} onHide={handleClose}>
            <Modal.Header  className='final-modal-title'>
    
            </Modal.Header>
            <Modal.Body className='final-modal-title'>
            Вы успешно зарегистрировались!
            </Modal.Body>
            <Modal.Footer className='final-modal-title'>
            <Button variant="secondary" onClick={handleClose}>
                Закрыть
            </Button>
            <Link to="/login">
            <Button variant="secondary">
                Войти
            </Button>
            </Link>
            </Modal.Footer>
        </Modal>

        </div>
        </Col>
        </Row>
        
    </Container>
    </div>
  )
}

export default Registr