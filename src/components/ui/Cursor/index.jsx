import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import styles from './Cursor.module.css'

const Cursor = () => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	})
	const [cursorVariant, setCursorVariant] = useState('default')

	useEffect(() => {
		const mouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			})
		}
		window.addEventListener('mousemove', mouseMove)
		return () => {
			window.removeEventListener('mousemove', mouseMove)
		}
	}, [])
	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
		},
	}
	return <motion.div className={styles.cursor} variants={variants} animate={cursorVariant} />
}

export default Cursor
