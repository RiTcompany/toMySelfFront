import React from 'react'

import Header from '../components/start/Header'
import Footer from '../components/start/Footer'
import ContactSection from '../components/start/ContactSection'
import { Container } from 'react-bootstrap'




function ContactPage() {
  return (
    <>
    <Header/>
    <Container style={{marginTop: '11rem'}}>
    <ContactSection />
    </Container>
    <Footer/>
    </>
  )
}

export default ContactPage