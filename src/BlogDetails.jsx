import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {

    const {id} = useParams()
    const {data: blog , isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`)

    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    function handleDelete() {
        setIsPending(true)
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(() => {
            setIsPending(false)
            navigate('/')
        })
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog &&  ( 
                <article>
                    <h2>{blog.title}</h2>
                    <p>By {blog.author}</p>
                    <p>{blog.body}</p>
                    {!isPending && <button onClick={handleDelete}>Delete Blog</button>}
                    {isPending && <button disabled>Deleting</button>}
                </article>
                )
            }
        </div>
    );
}
 
export default BlogDetails;