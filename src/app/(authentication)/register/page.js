import { authRegistration } from '@/lib/register';

const RegisterPage = async () => {
    return (
      <div className="bg-white rounded px-4 py-4 my-20 w-1/6">
        <form action={authRegistration}>
          <p className="text-black">
            <span>FirstName</span>
            <br />
            <input type="text" placeholder="FirstName" name="firstname" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>LastName</span>
            <br />
            <input type="text" placeholder="Lastname" name="lastname" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>Username</span>
            <br />
            <input type="text" placeholder="username" name="username" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>Email</span>
            <br />
            <input type="email" placeholder="Email" name="email" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>Mobile number</span>
            <br />
            <input type="text" placeholder="Mobile Number" name="mobile" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>Ip</span>
            <br />
            <input type="text" placeholder="ip addrtess" name="ip" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>Device</span>
            <br />
            <input type="text" placeholder="Device" name="device" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>Password</span>
            <br />
            <input type="password" placeholder="password" name="password" className="border my-2 py-2 px-2 w-full"/>
          </p>
          <p className="text-black">
            <span>Password Confirmation</span>
            <br />
            <input type="password" placeholder="confirm password" name="password_confirmation" className="border my-2 py-2 px-2 w-full"/>
          </p>

          <p className="text-black">
            
            <button className="border my-2 py-2 px-5 rounded-full text-white bg-zinc-800">Register</button>
          </p>
        </form>

        
      </div>
    )
  }
  
  export default RegisterPage