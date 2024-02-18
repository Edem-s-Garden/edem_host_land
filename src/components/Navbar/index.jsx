import React from 'react'
import logo from '../../img/LOGO.png'
import Button from '../ui/Button'
import styles from './Navbar.module.css'

function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<div className={styles.logo}>
					<img src={logo} alt='EG' />
				</div>
				<div className={styles.links}>
					<div>
						<a href='#why_section' className={styles.link}>
							Why we?
						</a>
					</div>
					<div>
						<a href='#reviews' className={styles.link}>
							User reviews
						</a>
					</div>
					<div>
						<a href='#contact_us' className={styles.link}>
							Contact us
						</a>
					</div>
					<Button title={'GET STARTED'} width={144} height={48} insetValue={'12em'} />
				</div>
			</div>
		</div>
	)
}

export default Navbar
