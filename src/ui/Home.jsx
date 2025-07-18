import React from 'react'
import Herosection from '../Sections/Herosection/Herosection'
import AboutSection from '../Sections/AboutSection/AboutSection'
import UnderBanner from '../Sections/underBanner/UnderBanner'
import Statstak from '../Sections/Statstak/Statstak'
import Programcard from '../Sections/ourprogram/Programcard'
import Trainer from '../Sections/trainer/Trainer'
import Form from '../Sections/FormFooter/Form'
import Testimonial from '../Sections/Testimonial/Testimonial'
import Video from '../Sections/Video/Video'
import JourneyTimeline from '../components/JourneyTimeline/JourneyTimeline'
import FloatingTicker from '../components/FloatingTicker/FloatingTicker'
import EnrollmentForm from '../components/EnrollmentForm/EnrollmentForm'
import FormModal from '../components/FormModal/FormModal'
export default function Home() {

    return (
        <>
            <FormModal />
            <FloatingTicker />
            <Herosection />
            <AboutSection />
            <UnderBanner />
            <Statstak />
            <Programcard />
            <JourneyTimeline />
            {/* <Trainer /> */}
            <EnrollmentForm />
            <Testimonial />
            <Video />

        </>
    )
}
