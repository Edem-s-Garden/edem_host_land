import React from 'react';
import styles from './Divider.module.css';

const Divider = ({ title }) => {
	const fr = {
		'--text-divider-gap': '38vw',
	};

	return (
		<div className={styles.title} style={title === '' ? fr : null}>
			{title}
		</div>
	);
};

export default Divider;
