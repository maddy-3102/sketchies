import React from 'react'
import styles from  '../../../styles/middle.module.css'
// import Image from 'next/image';

export const getStaticProps = async () =>{
  const res = await fetch('https://api.unsplash.com/photos/?client_id=vSj5SomnTVIhhnGFzz9lAcUterJikqa6V9kU2qDgNY8');
  const data  = await res.json();

  return {
   props: {
     data,
   },
  }; 
};

function Middle({data}) {
  console.log(data)
  return (
    
    <div className={styles.wrapper1}>
      {
        // data.slice(0,9).map((val)=>(
        //     <div key={val.id}>
        //         <Image 
        //         src= {val.urls.raw}
        //         alt='#'
        //         width={300} 
        //         height={200} 
        //         />
        //     </div> 
        // ))
      }
    </div>
  )
}

export default Middle
