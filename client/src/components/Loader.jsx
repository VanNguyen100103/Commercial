import ReactDOM from 'react-dom'  
import { useState, useEffect } from 'react'

function Loader() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let interval = setInterval(() => {
            setLoading(false)
          },3000)
        return () => clearInterval(interval)
    } 
    ,[])
    if (!loading) return null;
  return ReactDOM.createPortal(
    <div className='loader'>
      <div className='ld'></div>
    </div>,document.getElementById('loader')
  )
}

export default Loader
