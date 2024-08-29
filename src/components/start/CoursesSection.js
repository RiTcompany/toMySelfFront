import React from 'react'

import '../../css/components/_courses.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/start.css'

function CoursesSection() {
  return (
    <div className='courses-sec'>
        <section id="courses" class="courses">
            <div class="text-part">
                <h1>Our Popular Courses</h1>
                <div class="overlay-text">
                    <h2>COURSES</h2>
                </div>
                <hr class="line" />
            </div>
            <div class="main-container">
          
                <div class="card card1">
                    <div class="card_image">
                        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
                            alt="Software Development"/>
                    </div>
                    <div class="card_info">
                        <div class="card_info_rating">
                            <div class="rating_box">
                                <ion-icon name="star"></ion-icon>
                                <span>4.4</span>
                            </div>
                            <div class="rating_text">
                                <p>1k Rating</p>
                            </div>
                        </div>
                        <div class="card_info_text">
                            <a href="#">Software Development Zero to Pro</a>
                        </div>
                        <div class="card_info_status">
                            <div class="info">
                                <ion-icon name="play-circle"></ion-icon>
                                <p>Live Class</p>
                            </div>
                            <div class="info">
                                <ion-icon name="time"></ion-icon>
                                <p>32 Hour</p>
                            </div>
                        </div>
                        <div class="card_info_price">
                            <div class="price">
                                <h1>$60</h1>
                                <p>160.00</p>
                            </div>
                            <button class="btn btn-learnmore">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
      
                <div class="card card2">
                    <div class="card_image">
                        <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="UI/UX Design Pattern For Applications " />
                    </div>
                    <div class="card_info">
                        <div class="card_info_rating">
                            <div class="rating_box">
                                <ion-icon name="star"></ion-icon>
                                <span>4.1</span>
                            </div>
                            <div class="rating_text">
                                <p>580 Rating</p>
                            </div>
                        </div>
                        <div class="card_info_text">
                            <a href="#">UI/UX Design Pattern For Applications</a>
                        </div>
                        <div class="card_info_status">
                            <div class="info">
                                <ion-icon name="play-circle"></ion-icon>
                                <p>Online Class</p>
                            </div>
                            <div class="info">
                                <ion-icon name="time"></ion-icon>
                                <p>11 Hour</p>
                            </div>
                        </div>
                        <div class="card_info_price">
                            <div class="price">
                                <h1>$30</h1>
                                <p>60.00</p>
                            </div>
                            <button class="btn btn-learnmore">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
             
                <div class="card card3">
                    <div class="card_image">
                        <img src="https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                            alt="Advanced Cyber Security Course" />
                    </div>
                    <div class="card_info">
                        <div class="card_info_rating">
                            <div class="rating_box">
                                <ion-icon name="star"></ion-icon>
                                <span>4.9</span>
                            </div>
                            <div class="rating_text">
                                <p>2k Rating</p>
                            </div>
                        </div>
                        <div class="card_info_text">
                            <a href="#">Advanced Cyber Security Course</a>
                        </div>
                        <div class="card_info_status">
                            <div class="info">
                                <ion-icon name="play-circle"></ion-icon>
                                <p>Live Class</p>
                            </div>
                            <div class="info">
                                <ion-icon name="time"></ion-icon>
                                <p>22 Hour</p>
                            </div>
                        </div>
                        <div class="card_info_price">
                            <div class="price">
                                <h1>$85</h1>
                                <p>188.85</p>
                            </div>
                            <button class="btn btn-learnmore">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
             
                <div class="card card4">
                    <div class="card_image">
                        <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Data Structures & Algorithms - Basic To Advanced Concepts"/>
                    </div>
                    <div class="card_info">
                        <div class="card_info_rating">
                            <div class="rating_box">
                                <ion-icon name="star"></ion-icon>
                                <span>4.6</span>
                            </div>
                            <div class="rating_text">
                                <p>450 Rating</p>
                            </div>
                        </div>
                        <div class="card_info_text">
                            <a href="#">Data Structures & Algorithms - Basic To Advanced Concepts</a>
                        </div>
                        <div class="card_info_status">
                            <div class="info">
                                <ion-icon name="play-circle"></ion-icon>
                                <p>Live Class</p>
                            </div>
                            <div class="info">
                                <ion-icon name="time"></ion-icon>
                                <p>32 Hour</p>
                            </div>
                        </div>
                        <div class="card_info_price">
                            <div class="price">
                                <h1>$60</h1>
                                <p>120.00</p>
                            </div>
                            <button class="btn btn-learnmore">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
       
                <div class="card card5">
                    <div class="card_image">
                        <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                            alt="Full Stack Developer Training - Become a Web Developer"/>
                    </div>
                    <div class="card_info">
                        <div class="card_info_rating">
                            <div class="rating_box">
                                <ion-icon name="star"></ion-icon>
                                <span>4.4</span>
                            </div>
                            <div class="rating_text">
                                <p>680 Rating</p>
                            </div>
                        </div>
                        <div class="card_info_text">
                            <a href="#">Full Stack Developer Training - Become a Web Developer</a>
                        </div>
                        <div class="card_info_status">
                            <div class="info">
                                <ion-icon name="play-circle"></ion-icon>
                                <p>Live and Online Classes</p>
                            </div>
                            <div class="info">
                                <ion-icon name="time"></ion-icon>
                                <p>16 Hour</p>
                            </div>
                        </div>
                        <div class="card_info_price">
                            <div class="price">
                                <h1>$47</h1>
                                <p>95.00</p>
                            </div>
                            <button class="btn btn-learnmore">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
 
                <div class="card card6">
                    <div class="card_image">
                        <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Software Development"/>
                    </div>
                    <div class="card_info">
                        <div class="card_info_rating">
                            <div class="rating_box">
                                <ion-icon name="star"></ion-icon>
                                <span>4.1</span>
                            </div>
                            <div class="rating_text">
                                <p>380 Rating</p>
                            </div>
                        </div>
                        <div class="card_info_text">
                            <a href="#">Mobile App Development - Step by Step Guide for 2022</a>
                        </div>
                        <div class="card_info_status">
                            <div class="info">
                                <ion-icon name="play-circle"></ion-icon>
                                <p>Online Class</p>
                            </div>
                            <div class="info">
                                <ion-icon name="time"></ion-icon>
                                <p>10 Hour</p>
                            </div>
                        </div>
                        <div class="card_info_price">
                            <div class="price">
                                <h1>$29</h1>
                                <p>60.56</p>
                            </div>
                            <button class="btn btn-learnmore">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lowerpart">

                <button class="btn btn-viewall">
                    View All
                </button>
            </div>
        </section>

    </div>
  )
}

export default CoursesSection