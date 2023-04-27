import React from 'react';
import Link from 'next/link';

export const getStaticProps = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data  = await res.json();
  return {
   props: {
     data:data,
   },
  }; 
};

function index({data}) {
  return (
    <div className='blogs'>
      {
        data.slice(0,5).map((val)=>{
          return( 
            <div key={val.id}>
                <h1>{val.id}</h1>
                <Link href= {`/blog/${val.id}`}>
                <h2>{val.title}</h2>
                
                </Link>
            </div>
            )
          })
      }
    </div>
  )
}
export default index;
