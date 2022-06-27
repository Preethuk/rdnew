import React, { useState } from 'react'

function Exam() {
    const[count, setCount] = useState(0)
    const Increment =()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        setCount(count-1)
    }
  return (
    <div>

    </div>
  )
}

export default exam