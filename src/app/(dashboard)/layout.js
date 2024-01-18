export const metadata = {
    title: 'Ratefy App',
    description: 'Ratefy authentication service',
  }
  
  const ExternalLayout = ({ children }) => {
    return (
      <div className="flex justify-center">
       
          {children}
        
      </div>
    )
  }
  
  export default ExternalLayout
  