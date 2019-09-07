import React from 'react'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

export const Page = (props: IProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
