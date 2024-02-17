import React from 'react'

import Button from '../ui/Button'

import keyboard from '../../img/keyboard.png'
import monitor from '../../img/monitor.png'

import styles from './LandingSection.module.css'

const LandingSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.landing}>
				<div className={styles.text}>
					<p className={styles.text_lg}>
						RECORD VIDEO.
						<br />
						SHARE IT TO EVERYONE IN THE WORLD
					</p>
					<p className={styles.text_sm}>
						Got an idea for video? Record it! Want to share it with others? We have solution!
					</p>
					<Button title={'GET STARTED'} width={332} height={80} />
				</div>

				<div className={styles.imgs}>
					<img src={monitor} alt='monitor' className={`${styles.monitor} ${styles.anim_obj}`} />
					<img src={keyboard} alt='keyboard' className={`${styles.keyboard} ${styles.anim_obj}`} />
				</div>
			</div>
		</div>
	)
}

export default LandingSection
