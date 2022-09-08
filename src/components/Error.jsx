const Error = ({children}) => {
  return (
    <div className="bg-red-300 p-3 font-bold text-center uppercase text-red-700 rounded-md mb-3 ">
        {children}
    </div>
  )
}

export default Error