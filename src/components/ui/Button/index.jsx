import React, { useState } from 'react'
import styles from './Button.module.css'

function Button({ title, width, height, insetValue }) {
	const [clicked, setClicked] = useState(false)
	const [isHover, setIsHover] = useState(false)

	const handleMouseEnter = () => {
		setIsHover(true)
	}
	const handleMouseLeave = () => {
		setIsHover(false)
	}
	const handleClick = () => {
		setClicked(true)
	}

	const containerStyle = {
		width: `${width}px`,
		height: `${height}px`,
		boxShadow: isHover ? ` inset ${insetValue} 0 #ebae12` : 'inset 0 0 #ebae12',
	}

	return (
		<button
			className={styles.container}
			style={containerStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<span className={styles.title} onClick={handleClick}>
				{title}
			</span>
		</button>
	)
}

export default Button
