import React from 'react'

interface IProps {
  children: JSX.Element[] | JSX.Element
  onClick: () => void
}

export const Option = (props: IProps) => {
  return (
    <li>
      <button onClick={props.onClick}>
        {props.children}
      </button>
    </li>
  )
}
