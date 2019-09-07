import React from 'react'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

export const Options = (props: IProps) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}
