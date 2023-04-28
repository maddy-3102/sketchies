import '@/styles/globals.css'
import { useState } from 'react'
import Router from 'next/router';
import Loader from './components/Loader';


 function App({ Component, pageProps }) {
  const [loading,setLoading] = useState(false);

  Router.events.on('routeChangeStart',(url)=>{
    setLoading(true);
  });
  Router.events.on("routeChangeComplete",(url)=>{
    setLoading(false);
  });


  return( 
  <>
  {loading && <Loader/>}
  <Component {...pageProps} />
  </>
  )
}

export default App;