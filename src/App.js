import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

import StartPage from "./pages/StartPage";
import Registration from "./pages/Registration";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import RedactPage from "./pages/RedactPage"
import TestPage from "./pages/TestPage"
import EventPage from "./pages/EventPage";
import MentorsPage from "./pages/MentorsPage";
import PostPage from "./pages/PostPage";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("authenticated");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      navigate("/reg");
    }
  }, [isAuthenticated, navigate]);


  return element;
};

function App() {
  
    return (
      <div classnameName="name">
      
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/:id" 
                 element={<ProtectedRoute element={<StartPage />}/>}/>
          <Route path="/events" element={<EventPage/>} />
          <Route path="/reg" element={<Registration/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/redact" element={<ProtectedRoute element={<RedactPage/>} />}/>
          <Route path="/account" element={<ProtectedRoute element={<AccountPage/>} />}/>
          <Route path="/contact" element={<ProtectedRoute element={<ContactPage/>}/>}/>
          <Route path="/contact/:id" element={<ProtectedRoute element={<ContactPage/>}/>}/>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/post/:name" element={<PostPage/>} />
          <Route path="/test" element={<ProtectedRoute element={<TestPage/>} /> } />
          <Route path="/mentors" element={<MentorsPage/>} />

        </Routes>

        
      </Router>
      </div>
    );
}

export default App;