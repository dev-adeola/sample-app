const Users = ({ post }) => {
  return (
    <div className="w-full rounded-sm" key={post.id}>
          <h1 className="text-black font-extrabold">{post.title}</h1>
          <p className="text-gray-500 font-normal">{post.body}</p>
          <small className="text-blue-600 font-regular">{post.userId}</small> <small className="text-blue-300 font-light">{post.id}</small>
          
      </div>
  )
}

export default Users
