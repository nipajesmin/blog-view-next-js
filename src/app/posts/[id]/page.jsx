const PostDetails = async ({ params }) => {
    const { id } = params; // Extract the dynamic route parameter
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if (!res.ok) {
      return <div>Post not found</div>;
    }
  
    const post = await res.json();
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 block">
          Back to Home
        </a>
      </div>
    );
  };
  
  export default PostDetails;