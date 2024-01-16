export const metadata = {
  title: 'Ratefy App',
  description: 'Ratefy authentication service',
}

const ExternalLayout = ({ children }) => {
  return (
    <div>
      <h1>Header for External</h1>
        {children}
      <h1>Footer for External</h1>
    </div>
  )
}

export default ExternalLayout
