import React from 'react'

const Title = ({text}: {text: string}) => {
  return (
    <h1 className="font-black text-slate-800">
        {text}
  </h1>
  )
}

export default Title