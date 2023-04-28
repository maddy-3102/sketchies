import React, { useState } from 'react'
import styles from '../../../styles/navbar.module.css'

import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
    
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
            SKETCHIES
        </div>
        <div className={isActive ? styles.anim :styles.input} onClick={()=>setIsActive(true)}>
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
