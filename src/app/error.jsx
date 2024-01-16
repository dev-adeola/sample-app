"use client"
const Error = ({ children }) => {
  return (
    <div>
      <h1>Sorry, we have got an error from you: {children}</h1>
    </div>
  )
}

export default Error
