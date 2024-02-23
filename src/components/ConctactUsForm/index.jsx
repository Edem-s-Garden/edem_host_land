import React from 'react'
import styles from './ContactUsForm.module.css'
import Divider from '../ui/Divider'
import contactPic from '../../img/icons/contactUs.png'
import Button from '../ui/Button'

function ConctactUsForm() {
	return (
		<div id='contact_us' className={styles.container}>
			<Divider title={'HAVE A QUESTION? ASK US'} />
			<div className={styles.form_container}>
				<img alt='Contact Us' src={contactPic} className={styles.pic} />
				<form className={styles.form}>
					<label htmlFor='name'>NAME</label>
					<input name='name' className={styles.input} placeholder='Jonh Doe'></input>
					<label htmlFor='email'>EMAIL</label>
					<input
						type='email'
						className={styles.input}
						name='email'
						placeholder='jonhDoe@example.mail'></input>
					<label htmlFor='question'>YOUR QUESTION</label>
					<textarea
						name='question'
						className={styles.question}
						placeholder='Type your question'></textarea>
					<Button title={'SUBMIT'} width={480} height={80} insetValue={'30em'} />
				</form>
			</div>
		</div>
	)
}

export default ConctactUsForm
