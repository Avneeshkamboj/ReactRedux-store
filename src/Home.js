import React from 'react'
import { useGetAllPostQuery } from './services/posts'
//import { Link } from 'react-router-dom'

function Home() {
    const AllPosts = useGetAllPostQuery()
     console.log("posts:", AllPosts)
    // console.log("Data:", AllPosts.data)
    console.log("Status:", AllPosts.status)
   const  postsData = AllPosts.data
   const Status = AllPosts.status;
   if (Status === 'pending') return(<h3>Loading....</h3>)
  return (<div>
    <h1>All Posts</h1>

{postsData?.map((post, index) => (
          <div key={index}>
              <h2>{post.id} {post.title}</h2>
              <p>{post.body}</p>
              <hr/>
          </div>
        ))}
    </div>
  )
}

export default Home