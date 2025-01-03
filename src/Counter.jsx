import React from 'react'

function Counter(props) {
const {title,count} = props
  return (
    <div>
      <h2>{title} {count}</h2>
    </div>
  )
}

export default Counter
