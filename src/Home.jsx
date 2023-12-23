
import BlogList from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {

    const {data, isLoading, error} = useFetch(`http://localhost:8000/blogs`)
    const blogs = data
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    );
}
 
export default Home;