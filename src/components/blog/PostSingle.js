import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { sendGetRequest } from '../../utils/requests';
import '../../css/singlepost.css'
import { Container, Row, Col } from 'react-bootstrap';

function PostSingle() {
  
    const { name } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        sendGetRequest(`posts/?title=${name}`)
          .then((response) => {
            setPost(response);
            console.log(response)
          })
          .catch((error) => {
            console.error('Ошибка при получении данных', error);
          });
      }, []);
  return (
    <Container>
    <div className='post-single-cont'>
      <Row className='post-single'>
        <Col md="auto" className='no-padding'>
        <div className='card-photo'>
            <img className='card-photo1' src={post.image}/>
        </div>
        </Col>
        <Col>
        <div className='card-text-single'> 
            <p className='poduct-name' id='poduct-name2'>
                {post.author}  
            </p>

            <p className='product-price'>
            {post.title}
            </p>
            
                      
        </div>
        </Col>
        </Row>
        
    </div>
    <hr class="line"/>
    <div className='single-post-text'>
    <div className='html-text' dangerouslySetInnerHTML={{ __html: post.text }}></div>
    </div>
    </Container>
  )
}

export default PostSingle