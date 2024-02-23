import React from 'react'
import { reasons } from '../../utils/reasons'
import Card from '../Card'
import Divider from '../ui/Divider'
import styles from './WhySection.module.css'

function WhySection() {
	return (
		<div id='why_section' className={styles.container}>
			<Divider title={"WHY EDEM'S GARDEN?"} fontSize={5}/>
			<div className={styles.reasons}>
				{reasons.map((reason) => {
					return (
						<Card
							key={reason.id}
							title={reason.title}
							text={reason.text}
							icon={reason.icon}
							width={428}
							height={264}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default WhySection
