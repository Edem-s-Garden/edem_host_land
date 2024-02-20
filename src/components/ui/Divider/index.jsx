import React from 'react'
import styles from './Divider.module.css'

const Divider = ({ title }) => {
	return (
		<div className={styles.container}>
			<div className={styles.line}></div>
			<p className={styles.title}>{title}</p>
			<div className={styles.line}></div>
		</div>
	)
}

export default Divider
