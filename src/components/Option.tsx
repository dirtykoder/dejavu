import React from 'react'

interface IProps {
  children: JSX.Element[] | JSX.Element
  onClick: () => void
}

export const Option = (props: IProps) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  )
}
