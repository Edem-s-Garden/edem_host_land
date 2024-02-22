import React from 'react'
import LandingSection from '../LandingSection'
import WhySection from '../WhySection'
import styles from './Body.module.css'
import Feedback from '../Feedback'
import ConctactUsForm from '../ConctactUsForm'
import Footer from '../Footer'

const Body = () => {
	return (
		<div className={styles.body}>
			<LandingSection />
			<WhySection />
			<Feedback />
			<ConctactUsForm />
			<Footer />
		</div>
	)
}

export default Body
