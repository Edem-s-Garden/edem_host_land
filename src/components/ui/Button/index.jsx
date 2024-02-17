import React, { useState } from 'react'
import styles from './Button.module.css'

function Button({title}) {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true)
	}

	return (
		<div className={styles.container}>
			<span className={styles.title} onClick={handleClick}>{title}</span>
		</div>
	)
}

export default Button