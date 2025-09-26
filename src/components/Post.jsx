import {useState} from "react";
import './Post.css';

function Post( { item, onClick }){
    return(
        <div className='post' onClick={() => onClick(item)}>
            <div className='post-img'>
                <img src={item.img}
                     alt={item.title}
                     srcSet={item.img_2x}
                />
            </div>
            <p className='post-tag'>{item.tags}</p>
            <h2 className='post-title'>{item.title}</h2>
            <div className='post-info'>
                <span className='post-author'>{item.autor}</span>
                <span className='post-date'>{item.date}</span>
                <span className='post-views'>{item.views} Views</span>
            </div>
            <p className='post-short-desc'>{item.text}</p>
        </div>
    )
}
export default Post;