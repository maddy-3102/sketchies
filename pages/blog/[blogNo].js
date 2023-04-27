export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data  = await res.json();
    const paths = data.map((val)=>{
        return {
             params:{
                blogNo: val.id.toString(),
             },
            };
    });
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async(context) =>{
    const id = context.params.blogNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data  = await res.json();
    return {
     props: {
       data,
     },
    }; 
  };

function blogNo({data}) {
  const {title,body} = data;
  return (
    <div>
        <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default blogNo;
