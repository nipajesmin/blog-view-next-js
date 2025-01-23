// export const PostCard = ({post}) => {
//     return (
//         <div className="border p-4 rounded shadow">
//           <h2 className="text-lg font-bold">{post.title}</h2>
//           {/* <p className="text-sm text-gray-600">{post.body}</p> */}
//         </div>
//       );
// }

import Link from "next/link";

export const PostCard = ({ post }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">
        <Link href={`/posts/${post.id}`} className="text-black hover:underline">
          {post.title}
        </Link>
      </h2>
    
    </div>
  );
};
