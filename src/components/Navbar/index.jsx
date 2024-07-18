import React,{useState} from 'react'
import logo from '../../img/LOGO.png'
import menuham from '../../img/menuham.png'
import Button from '../ui/Button'
import styles from './Navbar.module.css'



function Navbar() {

		const [isOpen, setIsOpen] = useState(false);

		const handleToggle = () => {
			setIsOpen(!isOpen);
		};

		return (
			<div className={styles.container}>
				<div className={styles.navbar}>
					<button className={styles.collapse_button} onClick={handleToggle}>
						<img src={menuham} alt='Open menu' />
					</button>
					
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
							<a href='#feedback' className={styles.link}>
								User reviews
							</a>
						</div>
						<div>
							<a href='#contact_us' className={styles.link}>
								Contact us
							</a>
						</div>
					</div>
					<Button title={'GET STARTED'} width={144} height={48} insetValue={'12em'} />

				</div>
				{isOpen && (
					<ul className="link_list">
						<li>
							<a href='#why_section' className={styles.link}>
								Why we?
							</a>
						</li>
						<li>
							<a href='#feedback' className={styles.link}>
								User reviews
							</a>
						</li>
						<li>
							<a href='#contact_us' className={styles.link}>
								Contact us
							</a>
						</li>
					</ul>
				)}
			</div>
		)
	}

export default Navbar
