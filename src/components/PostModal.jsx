import "./PostModal.css"
function PostModal({post, onClose}){
    if (!post) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal")) {
            onClose();
        }
    };
    return(
        <div className='modal'  onClick={handleOverlayClick}>
            <div className='modal-content'>
                <button className='modal-close' onClick={onClose}></button>
                <div className='modal-post'>
                    <div className='post-img'>
                         <img src={post.img_2x} alt={post.title} srcSet={post.img_2x}/>
                    </div>
                    <p className='post-tag'>{post.tags}</p>
                    <h2 className='post-title'>{post.title}</h2>
                    <div className='post-info'>
                        <span className='post-author'>{post.autor}</span>
                        <span className='post-date'>{post.date}</span>
                        <span className='post-views'>{post.views} Views</span>
                    </div>
                    <p className='post-desc'>{post.text}</p>

                </div>
            </div>
        </div>
    );
}
export default PostModal;