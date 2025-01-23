"use client";

import { PostCard } from "./PostCard";

const FeaturePosts = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 m-5">
            {data.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default FeaturePosts;






