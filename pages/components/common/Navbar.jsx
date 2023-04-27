import React from 'react'
import styles from '../../../styles/navbar.module.css'

import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
            SKETCHIES
        </div>
        <div className={styles.input}>
            <span ><SearchIcon style={{
                height:"20px",
                paddingTop:"5px"
            }}/></span>
            
            <input type="text" />
        </div>
        <div className={styles.profile}>
          
        </div>
    </div>
  )
}

export default Navbar
