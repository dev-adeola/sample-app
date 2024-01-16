import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
const Authenticationlayout = ({children}) => {
  return (
    <div>
       <Navbar />
       <section className='flex justify-center item-center'>
        {children}
       </section>
        
        <Footer />
    </div>
  )
}

export default Authenticationlayout
