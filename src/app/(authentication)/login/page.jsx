
import Users from '../../../components/user/Users';
import { Authenticating } from '../../../lib/login'

const LoginPage = async () => {
  const posts = await Authenticating();
  // console.log(posts);

  return ( 
    <main className='w-1/6'>
      
      <div className="bg-white rounded px-4 py-4 my-20 ">
        <p className="text-black">
          <span>Email </span>
          <br />
          <input type="email" placeholder="Email" className="border my-2 py-2 px-2 w-full"/>
        </p>
        
        <p className="text-black">
          <span>Password</span>
          <br />
          <input type="password" placeholder="password" className="border my-2 py-2 px-2 w-full"/>
        </p>

        <p className="text-black">
          <button className="border my-2 py-2 px-5 rounded-full text-white bg-zinc-800">Login</button>
        </p>

      {/* {posts.map((post) => (
        <div key={post.id}>
          <Users post={post} />
        </div>
      ))} */}
      
    </div>
    
    </main>
  )
}

export default LoginPage