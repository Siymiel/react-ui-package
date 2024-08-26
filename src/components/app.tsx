import React, { useState } from 'react'

type props = {
  value?: number
}

const MyCounter = ({ value = 0 }: props) => {
  const [count, setCount] = useState(value)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default MyCounter
