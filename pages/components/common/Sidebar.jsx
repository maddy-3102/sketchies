import Image from 'next/image'
import React, { useState } from 'react'
import styles from  '../../../styles/sidebar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
function Sidebar() {
  const [plus, setPlus] = useState(false);
  
  const handleClick=()=>{
    setPlus(()=>!plus)
  }

  return (

    <div className={styles.wrapper3}>
    <div className={styles.innercontainer}>
      <div className={styles.addposts}  >
      <Image  onMouseEnter={handleClick} onMouseOut={handleClick}
      src="Rectangle10.svg" alt="image" height={100} width={100}
      />
     { plus && <AddIcon className={styles.plus} onMouseEnter={()=>setPlus(true)} onMouseOut={()=>setPlus(false)} />}
      </div>
      <div className={styles.options}>
       <ul>
         <li className={styles.home}>
           <span>
           <HomeIcon/>
           Home

           </span>
           
         </li>
         <li className={styles.bookmark}>
         <span>
           <BookmarkIcon/>
           Bookmark

           </span>
         </li>
         <li className={styles.category}>
         <span>
           <CategoryIcon/>
           Category

           </span>
         </li>
         <li className={styles.about}>
         <span>
           <InfoIcon/>
           About US

           </span>
         </li>
       </ul>
      </div>
    </div>
    </div>

  )
}

export default Sidebar
