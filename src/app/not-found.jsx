import Navbar from '@/components/navbar/Navbar';

const NotFound = () => {
  return (
    <div className="flex justify-center justify-items-center justify-self-center">
        <div className="py-60">
            <h1 className="text-[50px] font-bold block">404</h1>
            <h2 className="text-[35px] font-normal block">Not Found</h2>
            <p className="font-light block"> This page could not be found.</p>
            <div>
                <Navbar />
            </div>
        </div>
        
    </div>
  )
}

export default NotFound
