import Head from "next/head";

import Navbar from "./components/common/Navbar";
import styles from "../styles/homepage.module.css";
import Sidebar from "./components/common/Sidebar";
import Middle from "./components/common/Middle";
import Rightbar from "./components/common/Rightbar";

const index = ()=>{
  return (
    <>
    
    <Head>
      <title>Home Page</title>

    </Head>

    <Navbar />
    <div className={styles.wrapper}>
      <Sidebar/>
      <Middle/>
      <Rightbar/>
    </div>



    </>
  )
}

export default index;