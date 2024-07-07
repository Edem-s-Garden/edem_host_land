import React from 'react'
import styles from './Footer.module.css'
import Divider from '../ui/Divider'


function Footer() {
    return (
        <div className={styles.container}>
            <Divider title={''} />
            <div className={styles.copyright}>© 2024 Edem’s Garden | All rights reserved</div>
            
        </div>
    )
}

export default Footer
