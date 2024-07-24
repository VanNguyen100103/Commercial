import React, { useState } from 'react'


function Banner() {
    const [isShow, setIsShow] = useState(false)
  return (
    <div className={`banner ${isShow?'active':''}`} onClick={()=>setIsShow(!isShow)}>
      <img width="382" src="https://salt.tikicdn.com/ts/tikimsp/ef/02/32/97226a452f1c6211cc3a12846bc52216.png" alt="" />
      <img className='close-icon' src="https://salt.tikicdn.com/ts/upload/25/7d/61/cd84451cd9df4a2dac1ece8b291b675f.png" width="32" height="32" alt="close-icon"/>
    </div>
  )
}

export default Banner
