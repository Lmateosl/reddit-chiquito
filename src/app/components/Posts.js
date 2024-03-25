import React from "react";
import styles from "../../styles/Posts.module.css";
import Post from "../containers/Post";
import { tiempoDesde } from "../features/utilities";

export default function Posts({posts}) {
    return(
        <div>
            {
            posts.map(post => {
                return(
                    <div className={styles.container} key={post.id}>
                            <Post
                                img={post.url_overridden_by_dest || false}
                                vid={post.is_video ? post.media.reddit_video.fallback_url : false}
                                date={tiempoDesde(post.created_utc)} 
                                comments={post.num_comments}
                                votes={post.ups}
                                author={post.author} 
                                text={post.title}
                                idPost={post.id}
                                isVideo={post.is_video}
                            />
                    </div>)
            })
            }
        </div>
    );
}