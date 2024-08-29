import React, { useState, useEffect } from 'react';
import { sendGetRequest } from '../../utils/requests';
import '../../css/components/_faq.scss';
import "../../css/blog.css"
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Blog() {
  
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [expandedPostId, setExpandedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setExpandedPostId((prevId) => (prevId === postId ? null : postId));
  };



  useEffect(() => {
    sendGetRequest('categories')
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных', error);
      });
  }, []);


  useEffect(() => {
    sendGetRequest('posts/')
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных', error);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  const filteredPosts = selectedCategoryId
  ? posts.filter((post) => post.categories.includes(selectedCategoryId))
  : posts;


  
  return (
    <div className='blog-container'>
    <Container>
      <Row>
      <Col md='auto' className='categories'>

      <div className='categories-head'>
          <h3>Категории</h3>
      </div>
      {categories.map((category) => (
        <React.Fragment key={category.id}>
          <a
            id='pointer-link'
            className={`navbar-links ${selectedCategoryId === category.id ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
            style={{
              marginTop: "20px",
              padding: "5px",
              borderRadius: "10px",
            
            }}
          >
            {category.title}
          </a>
     
        </React.Fragment>
      ))}
      </Col>

      <Col>
      <Row className='posts-row'>
      {filteredPosts.map((post) => (
            <Col md='auto' key={post.id} className='post-container'>
            <Link to={`/post/${post.title_en}`}>
                  <div md='auto' >
                      <div className='card-photo'>
                        <img className='card-photo1' src={post.image}/>
                      </div>
                      <div className='card-text'> 
                      <p className='poduct-name'>
                       Автор: <p className='author-box'>{post.author}</p> 
                      </p>

                      <p className='product-price'>
                      {post.title}
                      </p>
            
                      
                      </div>

                      
                  </div>
                  </Link>
        </Col>
      ))}
      </Row>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Blog;