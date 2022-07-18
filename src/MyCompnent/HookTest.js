import React, { useState } from 'react'

export const HookTest = () => {
   
    let [count,setCount] = useState(0) 

  return (
    
    <div className='container text-center'>
        <h2>{count}</h2>
        <br/>
       <div className='text-center'> <button className='btn btn-success btn-sm' type='button ' onClick={() => {setCount(count+1)}}> Click Me</button></div>
    </div>
  )
}
