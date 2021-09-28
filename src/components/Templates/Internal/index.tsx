import React from 'react'

interface InternalProps {
  children: React.ReactNode
}

export default function Internal(props: InternalProps) {
  return <div>{props.children}</div>
}
