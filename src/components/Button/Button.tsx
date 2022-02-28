import React from 'react'

interface IButton {
  children: React.ReactChild | React.ReactChild[]
}
export default function Button(props: IButton) {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}
