import React, { useState } from 'react'

function Counter() {
    const[count,setCount] = useState(0)
//     const Increment =()=>{
//         setCount(count+1)
//     }
//  const Decrement =()=>{
//     setCount(count-1)
// }

  return (
    <div className='text-center'>
         <h1>{count}</h1>
         <button onClick={()=>setCount(count+1)} className='ml-10 p-2'>+</button>
         <button onClick={()=>setCount(count+1)} className='ml-10 p-2'>-</button>
         </div>
  )
}

export default Counter