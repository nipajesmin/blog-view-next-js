"use client";

import { PostCard } from "./PostCard";

const FeaturePosts = ({data}) => {
    return(

        <div className="grid grid-cols-3 gap-2">
            {data.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}


        </div>
    );
};

export default FeaturePosts;





