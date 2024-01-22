"use client";
import { useFormState } from  'react-dom';
import { authentication } from '@/lib/login';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const initialState = {
  message: '',
}
const LoginPage =   () => {
  const route = useRouter();
  const [state, authenticate] = useFormState(authentication, initialState);


  useEffect(() => {
    if(state?.message === 'true') {
      route.push('/chat');
    }
  });
      
  return ( 
    <main className='w-1/6'>
      <form action={authenticate}>
          <div className="bg-white rounded px-4 py-4 my-20 ">
            <p className="text-black">
              <span>Email </span>
              <br />
              <input type="email" placeholder="Email" name="email" className="border my-2 py-2 px-2 w-full"/>
            </p>
            
            <p className="text-black">
              <span>Password</span>
              <br />
              <input type="password" placeholder="password" name="password" className="border my-2 py-2 px-2 w-full"/>
            </p>

            <p className="text-black">
              <button className="border my-2 py-2 px-5 rounded-full text-white bg-zinc-800">Login</button>
            </p>
        </div>
      </form>
      
    
    </main>
  )
}

export default LoginPage