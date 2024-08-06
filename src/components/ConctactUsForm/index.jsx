import React, {useState} from 'react'
import styles from './ContactUsForm.module.css'
import Divider from '../ui/Divider'
import contactPic from '../../img/icons/contactUs.png'
import Button from '../ui/Button'

function ConctactUsForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		question: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		question: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const validateForm = () => {
		const newErrors = { name: '', email: '', question: '' };
		let isValid = true;

		if (!formData.name) {
			newErrors.name = 'Name is required';
			isValid = false;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email) {
			newErrors.email = 'Email is required';
			isValid = false;
		} else if (!emailPattern.test(formData.email)) {
			newErrors.email = 'Invalid email address';
			isValid = false;
		}

		if (!formData.question) {
			newErrors.question = 'Question is required';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			// Submit form
			console.log('Form submitted:', formData);
		}
	 };

	return (
		<div id='contact_us' className={styles.container}>
			<Divider title={'HAVE A QUESTION? ASK US'} />
			<div className={styles.form_container}>
				<img alt='Contact Us' src={contactPic} className={styles.pic} />
				<form className={styles.form} onSubmit={handleSubmit}>
					<label htmlFor='name'>NAME</label>
					<input
						name='name'
						className={`${styles.input} ${errors.name ? styles.error : ''}`}
						placeholder='Jonh Doe'
						value={formData.name}
						onChange={handleInputChange}
					/>
					{errors.name && <span className={styles.errorText}>{errors.name}</span>}

					<label htmlFor='email'>EMAIL</label>
					<input
						type='email'
						className={`${styles.input} ${errors.email ? styles.error : ''}`}
						name='email'
						placeholder='jonhDoe@example.mail'
						value={formData.email}
						onChange={handleInputChange}
					/>
					{errors.email && <span className={styles.errorText}>{errors.email}</span>}

					<label htmlFor='question'>YOUR QUESTION</label>
					<textarea
						name='question'
						className={`${styles.question} ${errors.question ? styles.error : ''}`}
						placeholder='Type your question'
						value={formData.question}
						onChange={handleInputChange}
					/>
					{errors.question && <span className={styles.errorText}>{errors.question}</span>}

					<Button type='submit' title={'SUBMIT'} height={80} insetValue={'30em'} />
				</form>
			</div>
		</div>
	)
}

export default ConctactUsForm