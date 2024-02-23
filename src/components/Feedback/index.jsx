import React from 'react'
import { comments } from '../../utils/comments'
import Field from '../Field'
import Divider from '../ui/Divider'
import styles from './Feedback.module.css'
import Button from '../ui/Button'

function Feedback() {
	return (
		<div id='feedback' className={styles.container}>
			<Divider title={'REVIEWS'}  />
			<div className='field_container'>
				<div className={styles.comments}>
					{comments.slice(0, comments.length / 2).map((comment) => {
						return (
							<Field
								key={comment.id}
								title={comment.title}
								text={comment.text}
								icon={comment.icon}
								width={428}
								height={164}
							/>
						)
					})}
				</div>
				<div className={styles.comments}>
					{comments.slice(comments.length / 2, comments.length).map((comment) => {
						return (
							<Field
								key={comment.id}
								title={comment.title}
								text={comment.text}
								icon={comment.icon}
								width={428}
								height={164}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Feedback
