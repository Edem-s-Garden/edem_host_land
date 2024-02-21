import React from 'react'
import LandingSection from '../LandingSection'
import WhySection from '../WhySection'
import styles from './Body.module.css'
import Feedback from '../Feedback'

const Body = () => {
	return (
		<div className={styles.body}>
			<LandingSection />
			<WhySection />
			<Feedback />
		</div>
	)
}

export default Body
