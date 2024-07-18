import React from 'react'
import styles from './Field.module.css'

const Field = ({ width, height, title, text, icon }) => {
	const containerStyle = {
		width: `${width}px`,
		minHeight: `${height}px`,
	}

	return (
		<div className={styles.container} style={containerStyle}>
			<div className={styles.wrapper}>
				<div className={styles.icon_container}>
					<img src={icon} alt='icon' className={styles.icon} />
				</div>
				<div className={styles.title_container}>
					<h1 className={styles.title}>{title.toUpperCase()}</h1>
				</div>
				<p className={styles.text}>"{text}"</p>
			</div>
		</div>
	)
}

export default Field