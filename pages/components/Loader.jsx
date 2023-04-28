import React from 'react'
import styles from '../../styles/loader.module.css'
import Image from 'next/image'

function Loader() {
  return (
    <div className={styles.loader}>
      <Image src="loader.svg" width={200} height={200}></Image>
    </div>
  )
}

export default Loader
