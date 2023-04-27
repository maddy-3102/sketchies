import React,{useEffect} from 'react'
import { useRouter } from 'next/router'

function NotFound() {
    const router = useRouter();
    const handleClick=()=>{
        router.push('/');
    }
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },4000);
    },[]);

  return (
      <div id="notfound">
    <div className='not-found'>
        <div className="notfound-404">
      <h1>404</h1>
        </div>
        <h2>WE ARE SORRY, PAGE NOT FOUND!...</h2>
        <p>
            The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
        </p>

        <a onClick={handleClick}>BACK TO HOME</a>
    </div>
    </div>
  )
}

export default NotFound
