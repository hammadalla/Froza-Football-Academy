import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/whatsappButton/WhatsappButton'
import FloatingBookingButton from './components/BookingButton/FloatingBookingButton'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

export default function MainLayout() {
  return (
    <>
      <ScrollProgress />
      <FloatingBookingButton />
      <WhatsAppButton />
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}
