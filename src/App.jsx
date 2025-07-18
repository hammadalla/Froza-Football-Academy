import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './ui/Home'
import AboutUs from './ui/AboutUs'
import Trainer from './ui/Trainer'
import ContactUs from './ui/ContactUs'
import Gallery from './ui/Gallery'
import TrainingDetails from './ui/TrainingDetails'
import RelatedProgramsSlider from './Sections/RelatedProgramsSlider/RelatedProgramsSlider'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Booking from './components/BookingPage/Booking'
import Programs from './ui/Programs'
import Events from './ui/Events'
import EventDetails from './ui/EventDetails'
import Locations from './ui/Locations'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Trainer" element={<Trainer />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="TrainingDetails" element={<TrainingDetails />} />
          <Route path="RelatedProgramsSlider" element={<RelatedProgramsSlider />} />
          <Route path="Booking" element={<Booking />} />
          <Route path="Programs" element={<Programs />} />
          <Route path="Event" element={<Events />} />
          <Route path="EventDetails" element={<EventDetails />} />
          <Route path="Locations" element={<Locations />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
