import Head from "next/head";

import Navbar from "./components/common/Navbar";
import styles from "../styles/homepage.module.css";
import Sidebar from "./components/common/Sidebar";
import Rightbar from "./components/common/Rightbar";
import Image from "next/image";


export const getStaticProps = async () =>{
  const res = await fetch('https://api.unsplash.com/photos/?client_id=vSj5SomnTVIhhnGFzz9lAcUterJikqa6V9kU2qDgNY8');
  const data  = await res.json();

  return {
   props: {
     data,
   },
  }; 
};

const index = ({data})=>{
  return (
    <>
    
    <Head>
      <title>Home Page</title>

    </Head>

    <Navbar />

    <div className={styles.wrapper}>
      <Sidebar/>
      <div className={styles.wrapper1}>
      {
        data.slice(0,5).map((val)=>(
            <div key={val.id}>
                <Image 
                src= {val.urls.raw}
                alt='#'
                width={500} 
                height={400} 
                />
            </div> 
        ))
      }
    </div>
      <Rightbar/>
    </div>




    </>
  )
}

export default index;