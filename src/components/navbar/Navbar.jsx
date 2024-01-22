import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      
      <div className="flex justify-evenly">
        <Link href="/about">About</Link>
        <Link href="/">Home</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </div>

    </div>
  )
}

export default Navbar
