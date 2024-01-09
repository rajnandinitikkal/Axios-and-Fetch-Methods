import axios from 'axios';
import { useState,useEffect } from 'react';
const AxiosUsage=()=>{
   
    const[post,setPost]=useState({});
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>
            {
            setPost(res.data)
        })
    },[])
    const postCreation=()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {title:'The AxiosUsage with ExcelR',
        body:'Wonderful'
        }).then(res=>
        {   console.log(res.data)
            setPost(res.data)
        }
        )
    }
    return(
        <div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <button onClick={postCreation}>Create Post</button>
        </div>
    )
}

export default AxiosUsage