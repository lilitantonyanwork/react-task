import Post from "./Post";
import PostModal from "./PostModal";
import "./BlogList.css";
import {useState, useEffect} from "react";

function BlogList({searchTerm}){

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://cloud.codesupply.co/endpoint/react/data.json");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error Loading Data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p className='post-loading'>Loading...</p>;
    }

    return(
        <div className='container'>
            <div className='post-list'>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((item, id) => (
                        <Post key={id} item={item} onClick={setSelectedPost}    />
                    ))
                ) : (
                    <p className='post-list-empty'>Nothing found</p>
                )}
            </div>
            <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        </div>

    )
}
export default  BlogList;