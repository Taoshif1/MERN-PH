import { use } from "react"

export default function Posts({postsPromise}){
    
    const posts = use(postsPromise);
    console.log(posts);

    return(
        <div className="card">
            <h3>Posts: {posts.length}</h3>
        </div>
    )
}