import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config';
import {Container, PostCard} from '../components'
import { Link,useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })

    }, [])
  
    if (posts.length ===0) {
        return (
            <div  className='w-full py-12 mt-4 text-center '>
                <Container>
                    <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                    <h1 className='text-2xl font-bold text-primary hover:text-gray-500 ' >
                    <Link
                        to="/login"
                        className="font-bold text-primary transition-all duration-200 hover:underline   ">
                       Login to see posts
                    </Link>    
                    </h1>
                    </div>
                    </div>
                </Container>
            </div>
        )
    } 
    return (
        <div className='w-full py-4 px-0 font-extralight text-slate-300'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key = {post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Home
